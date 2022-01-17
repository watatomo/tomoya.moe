import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

/**
 * @returns An array of strings representing each post slug, formatted like `${storyName}/${chapterName}.md`
 */
export async function getPostSlugs() {
    const storyNames = await fs.promises.readdir(postsDirectory);

    const postSlugs = await Promise.all(
        storyNames.map(async (storyName) => {
            const storyDirectoryPath = join(postsDirectory, storyName);
            const isDirectory = await fs.promises
                .lstat(storyDirectoryPath)
                .then((stat) => stat.isDirectory());

            if (!isDirectory) {
                return null;
            }

            const chapterNames = await fs.promises.readdir(storyDirectoryPath);
            return chapterNames.map(
                (chapterName) => `${storyName}/${chapterName}`
            );
        })
    ).then((result) => result.flat());

    return postSlugs;
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
    const fullPath = join(postsDirectory, `${story}/${realChapter}.md`);
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

export async function getAllPosts(fields = []) {
    const slugs = await getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export async function getAllChapters(fields = []) {
    const slugs = await getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
