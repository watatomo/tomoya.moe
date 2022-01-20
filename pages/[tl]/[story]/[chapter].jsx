/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable @next/next/no-page-custom-font */
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { getChapterStaticProps, getChapterStaticPaths } from "../../../lib/api";
import config from "../../../mako.config";
import {
    Bubble,
    BubbleHidden,
    BubbleUnknown,
    Thought,
    Season,
    Location,
    Narration,
    Cw
} from "../../../components/mashiro";
import Toolbar from "../../../components/tl/Toolbar";
import Meta from "../../../components/meta";

export default function Post({ post }) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <article>
            <Head>
                <title>{post.title}</title>
                <Meta />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <div className="chapter__wrapper">
                <div className="mashiro__wrapper">
                    <Toolbar post={post} />
                    <div className="mashiro">
                        <MDXRemote
                            {...post.content}
                            components={{
                                Bubble,
                                BubbleHidden,
                                BubbleUnknown,
                                Thought,
                                Season,
                                Location,
                                Narration,
                                Cw,
                                Image
                            }}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

export async function getStaticProps({ params }) {
    const post = getChapterStaticProps(params.story, params.chapter, [
        "title",
        "date",
        "slug",
        "author",
        "story",
        "previous",
        "next",
        "content"
    ]);
    // const content = await markdownToHtml(post.content || "");
    const content = await serialize(post.content || "");
    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    };
}

export async function getStaticPaths() {
    const paths = getChapterStaticPaths(["story", "chapter"]);

    return {
        paths: paths.map((path) => ({
            params: {
                tl: config.translationsPath || "tl",
                story: path.story,
                chapter: String(path.chapter)
            }
        })),
        fallback: false
    };
}
