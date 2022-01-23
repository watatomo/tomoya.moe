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
import {
    getAllPostFilePaths,
    getPostFieldsByPath,
    getActualFilePathForSlug
} from "../../lib/api";
import config from "../../mako.config";
import {
    Bubble,
    BubbleHidden,
    BubbleUnknown,
    Thought,
    Season,
    Location,
    Narration,
    Cw
} from "../../components/mashiro";
import Toolbar from "../../components/tl/Toolbar";
import Credits from "../../components/tl/Credits";
import Meta from "../../components/meta";
import { TWITTER_UN } from "../../lib/constants";

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
                <meta name="title" content={post.title} />
                <meta name="description" content={post.description} />
                <meta property="og:type" content="article" />
                {/* <meta property="og:url" content={SITE_URL} /> */}
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
                <meta property="twitter:card" content="summary" />
                {/* <meta property="twitter:url" content= /> */}
                <meta property="twitter:title" content={post.title} />
                <meta
                    property="twitter:description"
                    content={post.description}
                />
                {/* <meta property="twitter:image" content={post.ogImage.url} /> */}
                <meta property="twitter:creator" content={TWITTER_UN} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
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
                                Image,
                                Credits
                            }}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    // Slugs for index posts
    const path = await getActualFilePathForSlug(slug.join("/"));

    const post = getPostFieldsByPath(path, [
        "title",
        "description",
        "date",
        "slug",
        "author",
        "story",
        "previous",
        "next",
        "content"
    ]);
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
