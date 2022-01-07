import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../../components/container";
import PostBody from "../../../components/post-body";
import Header from "../../../components/header";
import PostHeader from "../../../components/post-header";
import Layout from "../../../components/layout";
import {
    getPostBySlug,
    getStoryChapter,
    getAllPosts,
    getAllChapters,
} from "../../../lib/api";
import PostTitle from "../../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../../lib/constants";
import config from "../../../mako.config";
import markdownToHtml from "../../../lib/markdownToHtml";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import {
    Bubble,
    Thought,
    Season,
    Location,
    Narration,
    Cw,
} from "../../../components/Mashiro";
import Image from "next/image";

export default function Post({ post, morePosts, preview }) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <>
            <article>
                <Head>
                    <title>
                        {post.title} | Next.js Blog Example with {CMS_NAME}
                    </title>
                    {/* <meta property="og:image" content={post.ogImage.url} /> */}
                </Head>
                <div className="chapter-wrapper">
                    <div className="toolbar-wrapper">
                        <div className="toolbar">
                            <div className="toolbar__section">back</div>
                            <div className="toolbar__section">color</div>
                            <div className="toolbar__section">index</div>
                            <div className="toolbar__section">text</div>
                            <div className="toolbar__section">next</div>
                        </div>
                    </div>
                    <div className="mashiro">
                        <MDXRemote
                            {...post.content}
                            components={{
                                Bubble,
                                Thought,
                                Season,
                                Location,
                                Narration,
                                Cw,
                                Image,
                            }}
                        />
                    </div>
                </div>
            </article>
        </>
    );
}

export async function getStaticProps({ params }) {
    const post = getStoryChapter(params.story, params.chapter, [
        "title",
        "date",
        "slug",
        "author",
        "content",
    ]);
    // const content = await markdownToHtml(post.content || "");
    const content = await serialize(post.content || "");
    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllChapters(["story", "chapter"]);

    return {
        paths: posts.map((post) => {
            // console.log(post);
            return {
                params: {
                    tl: config.translationsPath || "tl",
                    story: post.story,
                    chapter:
                        typeof post.chapter === "number"
                            ? post.chapter.toString()
                            : post.chapter,
                },
            };
        }),
        fallback: false,
    };
}
