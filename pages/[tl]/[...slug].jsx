/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { serialize } from "next-mdx-remote/serialize";
import {
    getAllPostFilePaths,
    getPostFieldsByPath,
    getActualFilePathForSlug
} from "../../lib/api";
import config from "../../mako.config";
import StoryChapter from "../../components/tl/StoryChapter";
import StoryIndex from "../../components/tl/StoryIndex";

const PostType = {
    Chapter: "chapter",
    Index: "index"
};

const PostFieldsForPostType = {
    [PostType.Chapter]: [
        "title",
        "description",
        "date",
        "slug",
        "story",
        "previous",
        "next",
        "content",
        "previewImg",
        "miniTalk"
    ],
    [PostType.Index]: [
        "title",
        "story",
        "actualStory",
        "description",
        "descPlain",
        "descSource",
        "banner",
        "titleJp",
        "cover",
        "season",
        "chapterTotal",
        "writer",
        "storyColor",
        "storyColorRGB",
        "storyColorH",
        "storyColorS",
        "storyColorL",
        "slug",
        "content",
        "characters",
        "extra",
        "images",
        "minitalk",
        "chapterSections",
        "cards",
        "newEra",
        "translator",
        "proofreader",
        "miniTalkSections",
        "commentVA",
        "commentVAs",
        "commentWriter",
        "commentTN"
    ]
};

export default function Post({ post, postType }) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    if (postType === PostType.Chapter) {
        return <StoryChapter post={post} />;
    }
    if (postType === PostType.Index) {
        return <StoryIndex post={post} />;
    }

    throw new Error(`Unknown post type: ${postType}`);
}

export async function getStaticProps({ params }) {
    const postPath = await getActualFilePathForSlug(params.slug.join("/"));
    const postType = postPath.toLowerCase().endsWith("index")
        ? PostType.Index
        : PostType.Chapter;
    const post = getPostFieldsByPath(postPath, PostFieldsForPostType[postType]);
    const content = await serialize(post.content || "");
    return {
        props: {
            post: {
                ...post,
                content
            },
            postType
        }
    };
}

export async function getStaticPaths() {
    const slugs = getAllPostFilePaths();
    const posts = slugs.map((slug) => getPostFieldsByPath(slug, ["slug"]));
    const paths = posts.map((post) => {
        const slugSegments = post.slug.split("/");
        // Prefer URLs that look like /tl/sanctuary instead of /tl/sanctuary/index
        if (slugSegments[slugSegments.length - 1].toLowerCase() === "index") {
            slugSegments.pop();
        }
        return {
            params: {
                tl: config.translationsPath || "tl",
                slug: slugSegments
            }
        };
    });

    return {
        paths,
        fallback: false
    };
}
