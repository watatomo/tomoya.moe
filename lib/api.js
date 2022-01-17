import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

function isDirectory(path) {
    return fs.lstatSync(path).isDirectory();
}

/**
 * @returns An array of strings which are the paths of all files relative to `_posts`.
 * Ex.
 * ['sanctuary/1.md',
 * 'sanctuary/index.md',
 * 'sanctuary/mini_talk/tomoya/2.md',
 * 'sanctuary/mini_talk/wataru/2.md']
 */
function getAllPostSlugs() {
    const allPostPaths = [];

    const getFullPath = (currentPath, pathSegment = "") => {
        const newPath = join(currentPath, pathSegment);
        if (!isDirectory(newPath)) {
            allPostPaths.push(newPath);
            return;
        }
        const pathSegments = fs.readdirSync(newPath);
        pathSegments.forEach((pathSegment) =>
            getFullPath(newPath, pathSegment)
        );
    };

    getFullPath(postsDirectory);

    const postSlugs = allPostPaths.map((path) =>
        path.replace(postsDirectory + "/", "")
    );

    return postSlugs.sort();
}

function isChapterSlug(slug) {
    const pathSegments = slug.split("/");
    return (
        pathSegments.length === 2 &&
        pathSegments[1].toLowerCase() !== "index.md"
    );
}

function isMiniTalkSlug(slug) {
    return slug.split("/").length === 4;
}

/**
 * @param {*} slug Path relative to `_posts`
 * @returns {Object}
 */
export function getPostFieldsBySlug(slug, fields = []) {
    const fullPath = join(postsDirectory, slug);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = slug;
        }
        if (field === "content") {
            items[field] = content;
        }

        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });

    return items;
}

export function getChapterStaticPaths(fields = []) {
    const slugs = getAllPostSlugs();
    const chapterSlugs = slugs.filter(isChapterSlug);
    const posts = chapterSlugs
        .map((slug) => getPostFieldsBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getChapterStaticProps(story, chapter, fields = []) {
    const slug = `${story}/${chapter}.md`;
    return getPostFieldsBySlug(slug, fields);
}

export async function getAllPosts(fields = []) {
    const slugs = await getPostSlugs();
    const posts = slugs
        .map((slug) => getPostFieldsBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
