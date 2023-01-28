import fs from "fs";
import path from "path";
import matter from "gray-matter";
import to from "await-to-js";

const POSTS_DIRECTORY = path.join(process.cwd(), "_posts");
const POST_EXTENSION = ".mdx";

function isDirectory(filePath) {
    return fs.lstatSync(filePath).isDirectory();
}

/**
 * @returns An array of paths of all files relative to `_posts`.
 * Ex.
 * ['sanctuary/1',
 * 'sanctuary/index',
 * 'sanctuary/mini_talk/tomoya/2',
 * 'sanctuary/mini_talk/wataru/2']
 */
export function getAllPostFilePaths() {
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

    const postPaths = allPostPaths
        .filter((postPath) => postPath.endsWith(POST_EXTENSION))
        .map((postPath) =>
            postPath

                .replace(`${POSTS_DIRECTORY}${path.sep}`, "")
                .replace(POST_EXTENSION, "")
        );

    return postPaths.sort();
}

/**
 * Post URLs may not be 1-1 with the directory structure in the _posts folder
 * such as in the case of index.md files or custom slugs.
 * @param {string} slug Slug param from URL as a string joined by '/'
 * @returns The path for the post file that the slug is pointing to
 */
export async function getActualFilePathForSlug(slug) {
    const slugAsValidPath = slug.replace(/\//g, path.sep);
    const getFullPostPath = (partialPath) =>
        path.join(POSTS_DIRECTORY, `${partialPath}${POST_EXTENSION}`);

    const [error] = await to(
        fs.promises.readFile(getFullPostPath(slugAsValidPath), "utf8")
    );
    if (!error) {
        return slugAsValidPath;
    }

    const pathWithIndex = `${slugAsValidPath}${path.sep}index`;
    const [error2] = await to(
        fs.promises.readFile(getFullPostPath(pathWithIndex), "utf8")
    );
    if (!error2) {
        return pathWithIndex;
    }

    // TODO: Handle custom slugs

    throw new Error(`Could not find file for slug ${slug}`);
}

/**
 * @param {string} filePath Path relative to `_posts` EXCLUDING the file extension.
 * @returns {Object}
 */
export function getPostFieldsByPath(filePath, fields = []) {
    const fullPath = path.join(POSTS_DIRECTORY, `${filePath}${POST_EXTENSION}`);
    console.log(filePath, fullPath);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            // Slug can either be customized through front matter metadata
            // or will default to the directory structure
            const slugField = data.slug || filePath;
            // On Windows, path.sep may be "//" or "\"
            // so we need to replace them with "/"
            const validSlug = slugField.replace(new RegExp(/(\/\/)|\\/g), "/");
            items[field] = validSlug;
            return;
        }
        if (field === "story") {
            // TODO: If we want to support custom slugs, we can't assume
            // the story name is always in the second to last or last segment
            const pathSegments = filePath.split(path.sep);
            const isStandaloneChapter = !data.previous && !data.next;
            const storySegment = isStandaloneChapter
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
