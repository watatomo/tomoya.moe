import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

// const readDirRecursive = async (filePath) => {
//     const dir = await fs.promises.readdir(filePath);
//     const files = await Promise.all(
//         dir.map(async (relativePath) => {
//             const absolutePath = join(filePath, relativePath);
//             const stat = await fs.promises.lstat(absolutePath);

//             return stat.isDirectory()
//                 ? readDirRecursive(absolutePath)
//                 : // : absolutePath;
//                   relativePath;
//         })
//     );

//     return files.flat();
// };

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);

    // readDirRecursive(postsDirectory).then((result) => {
    //     console.log(result);
    //     return result;
    // });

    // return readDirRecursive(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug;
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

export function getStoryChapter(story, chapter, fields = []) {
    const realChapter = chapter.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${story}-${realChapter}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realChapter;
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

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs();
    // console.log("Slugs");
    // console.log(slugs);
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getAllChapters(fields = []) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
