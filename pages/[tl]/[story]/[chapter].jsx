/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
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

export default function Post({ post }) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <article>
            <Head>
                <title>{post.title}</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <div className="chapter-wrapper">
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
        </article>
    );
}

export async function getStaticProps({ params }) {
    const post = getChapterStaticProps(params.story, params.chapter, [
        "title",
        "date",
        "slug",
        "author",
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
