import Head from "next/head";
import Meta from "../../../meta";
import { TWITTER_UN, SITE_URL } from "../../../../lib/constants";
import config from "../../../../mako.config";

function deriveIndexURL({ slug, tl }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${SITE_URL}${tl}/${slugSegments.join("/")}`;
}

function deriveIndexImage({ slug, tl, newSegment }) {
    const slugSegments = slug.split("/");
    slugSegments[slugSegments.length - 1] = newSegment;
    return `${SITE_URL}img/${tl}/${slugSegments.join("/assets/")}`;
}

/* help
async function deriveIndexImage({ slug, tl, newSegment }) {
    const slugSegments = slug.split("/");
    slugSegments[slugSegments.length - 1] = newSegment;
    const image = require(`../../../../public/img/${tl}/${slugSegments.join("/assets/")}`);
    return image;
}
*/

const tl = config.translationsPath || "tl";

function IndexMeta({ post }) {
    return (
        <Head>
            <title>{post.title}</title>
            <Meta />
            <meta name="title" content={post.title} />
            <meta name="description" content={post.description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={deriveIndexURL({
                slug: post.slug,
                tl
            })} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.description} />
            <meta property="og:image" content={deriveIndexImage({
                slug: post.slug,
                tl,
                newSegment: post.cover
            })} />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={deriveIndexURL({
                slug: post.slug,
                tl
            })} />
            <meta property="twitter:title" content={post.title} />
            <meta
                property="twitter:description"
                content={post.description}
            />
            <meta property="twitter:image" content={deriveIndexImage({
                slug: post.slug,
                tl,
                newSegment: post.cover
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

export default IndexMeta;