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
export function getAllPostSlugs() {
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
// function isChapterSlug(slug) {
//     const pathSegments = slug.split(path.sep);
//     return pathSegments[pathSegments.length - 1].toLowerCase() !== "index";
// }

/**
 * Assumes a folder structure like _posts/sanctuary/index.md
 */
function isStoryIndexSlug(slug) {
    const pathSegments = slug.split(path.sep);
    return pathSegments[pathSegments.length - 1].toLowerCase() === "index";
}

/**
 * @param {string} slug Path relative to `_posts`. It is possible for slug to contain path
 * separators that are not valid for the current OS.
 * @returns {Object}
 */
export function getPostFieldsBySlug(slug, fields = []) {
    const slugAsValidPath = slug.replace(/\\/g, path.sep);
    const fullPath = path.join(
        POSTS_DIRECTORY,
        `${slugAsValidPath}${POST_EXTENSION}`
    );
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            // Slug can either be customized through front matter metadata
            // or will default to the directory structure
            const slugField = data.slug || slug;
            // On Windows, path.sep may be "//" or "\" but a TLer would
            // probably type their custom slug using "/"
            const slugSegments = slugField.replace(
                new RegExp(path.sep, "g"),
                "/"
            );
            items[field] = slugSegments;
            return;
        }
        if (field === "story") {
            const pathSegments = slugAsValidPath.split(path.sep);
            const isStandaloneStoryFile = !data.previous && !data.next;
            const storySegment = isStandaloneStoryFile
                ? pathSegments[pathSegments.length - 1]
                : pathSegments[pathSegments.length - 2];
            items[field] = storySegment;
            return;
        }
        if (field === "content") {
            items[field] = content;
            return;
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
