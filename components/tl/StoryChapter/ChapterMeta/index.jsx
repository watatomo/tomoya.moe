import Head from "next/head";
import Meta from "../../../meta";
import { TWITTER_UN, SITE_URL } from "../../../../lib/constants";
import config from "../../../../mako.config";

function deriveChapterURL({ slug, tl }) {
    const slugSegments = slug.split("/");
    return `${SITE_URL}${tl}/${slugSegments.join("/")}`;
}

function deriveChapterImage({ slug, tl }) {
    const slugSegments = slug.split("/");
    return `${SITE_URL}img/${tl}/${slugSegments.join("/")}/1.jpg`;
}

const tl = config.translationsPath || "tl";

function ChapterMeta({ post }) {
    return (
        <Head>
            <title>{post.title}</title>
            <Meta />
            <meta name="title" content={post.title} />
            <meta name="description" content={post.description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={deriveChapterURL({
                slug: post.slug,
                tl
            })} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.description} />
            <meta property="og:image" content={deriveChapterImage({
                slug: post.slug,
                tl
            })} />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={deriveChapterURL({
                slug: post.slug,
                tl
            })} />
            <meta property="twitter:title" content={post.title} />
            <meta
                property="twitter:description"
                content={post.description}
            />
            <meta property="twitter:image" content={deriveChapterImage({
                slug: post.slug,
                tl
            })} />
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
    );
}

export default ChapterMeta;