import Head from "next/head";
import { getStoryIndexStaticPaths } from "../../../lib/api";
import config from "../../../mako.config";
import Meta from "../../../components/meta";
import { TWITTER_UN } from "../../../lib/constants";

export default function StoryIndex({ story }) {
    return (
        <article>
            <Head>
                <title>{story.title}</title>
                <Meta />
                <meta name="title" content={story.title} />
                <meta name="description" content={story.description} />
                <meta property="og:type" content="article" />
                {/* <meta property="og:url" content={SITE_URL} /> */}
                <meta property="og:title" content={story.title} />
                <meta property="og:description" content={story.description} />
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
                <meta property="twitter:card" content="summary" />
                {/* <meta property="twitter:url" content= /> */}
                <meta property="twitter:title" content={story.title} />
                <meta
                    property="twitter:description"
                    content={story.description}
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
            <div className="storyIndex__wrapper">
                <div className="mashiro__wrapper">
                    <div className="mashiro">testing...</div>
                </div>
            </div>
        </article>
    );
}

export async function getStaticProps({ params }) {
    return {
        props: {
            story: params.story
        }
    };
}

export async function getStaticPaths() {
    const indexes = getStoryIndexStaticPaths(["story"]);

    return {
        paths: indexes.map((post) => ({
            params: {
                tl: config.translationsPath || "tl",
                story: post.story
            }
        })),
        fallback: false
    };
}
