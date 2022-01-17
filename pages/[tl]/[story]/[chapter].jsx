import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getStoryChapter, getAllChapters } from "../../../lib/api";
import Head from "next/head";
import { SITE_TITLE } from "../../../lib/constants";
import config from "../../../mako.config";
import markdownToHtml from "../../../lib/markdownToHtml";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import {
    Bubble,
    BubbleHidden,
    BubbleUnknown,
    Thought,
    Season,
    Location,
    Narration,
    Cw,
} from "../../../components/mashiro";
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
                    <title>{post.title}</title>
                    {/* <meta property="og:image" content={post.ogImage.url} /> */}
                </Head>
                <div className="chapter-wrapper">
                    <div className="toolbar-wrapper">
                        <div className="toolbar">
                            <div className="toolbar__section">back</div>
                            <div className="toolbar__section">color</div>
                            <div className="toolbar__section">index</div>
                            <div className="toolbar__section">text</div>
                            <div className="toolbar__section">{post.next}</div>
                        </div>
                    </div>
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
        "color",
        "colorRGB",
        "colorH",
        "colorS",
        "colorL",
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
    const posts = await getAllChapters(["story", "chapter"]);

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
