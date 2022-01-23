import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY = path.join(process.cwd(), "_posts");
const POST_EXTENSION = ".md";

function isDirectory(filePath) {
    return fs.lstatSync(filePath).isDirectory();
}

/**
 * @returns An array of strings which are the slugs of all files relative to `_posts`.
 * Ex.
 * ['sanctuary/1',
 * 'sanctuary/index',
 * 'sanctuary/mini_talk/tomoya/2',
 * 'sanctuary/mini_talk/wataru/2']
 */
function getAllPostSlugs() {
    const allPostPaths = [];

    const getFullPath = (currentPath, pathSegment = "") => {
        const newPath = path.join(currentPath, pathSegment);
        if (!isDirectory(newPath)) {
            allPostPaths.push(newPath);
            return;
        }
        const pathSegments = fs.readdirSync(newPath);
        pathSegments.forEach((segment) => getFullPath(newPath, segment));
    };

    getFullPath(POSTS_DIRECTORY);

    const postSlugs = allPostPaths.map((postPath) =>
        postPath
            .replace(`${POSTS_DIRECTORY}${path.sep}`, "")
            .replace(POST_EXTENSION, "")
    );

    return postSlugs.sort();
}

/**
 * Assumes a folder structure like _posts/sanctuary/1.md
 */
function isChapterSlug(slug) {
    const pathSegments = slug.split(path.sep);
    return (
        pathSegments.length === 2 && pathSegments[1].toLowerCase() !== "index"
    );
}

/**
 * Assumes a folder structure like _posts/sanctuary/index.md
 */
function isStoryIndexSlug(slug) {
    const pathSegments = slug.split(path.sep);
    return (
        pathSegments.length === 2 && pathSegments[1].toLowerCase() === "index"
    );
}

/**
 * Assumes a folder structure like _posts/sanctuary/mini_talk/tomoya/2.md
 */
// Uncomment when implementing mini talks
function isMiniTalkSlug(slug) {
    return slug.split("/").length === 4;
}

/**
 * @param {*} slug Path relative to `_posts`
 * @returns {Object}
 */
export function getPostFieldsBySlug(slug, fields = []) {
    const fullPath = path.join(POSTS_DIRECTORY, `${slug}${POST_EXTENSION}`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const [story, chapter] = isChapterSlug(slug) ? slug.split(path.sep) : [];

    const items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = slug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (field === "story") {
            items[field] = story;
        }
        if (field === "chapter") {
            items[field] = chapter;
        }

        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });

    return items;
}

export function getStoryIndexStaticPaths(fields = []) {
    const slugs = getAllPostSlugs();
    const indexSlugs = slugs.filter(isStoryIndexSlug);
    const posts = indexSlugs
        .map((slug) => getPostFieldsBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
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
    const slug = `${story}${path.sep}${chapter}`;
    return getPostFieldsBySlug(slug, fields);
}

export async function getAllPosts(fields = []) {
    const slugs = await getAllPostSlugs();
    const posts = slugs
        .map((slug) => getPostFieldsBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
