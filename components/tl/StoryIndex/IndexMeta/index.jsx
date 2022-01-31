import Head from "next/head";
import Meta from "../../../meta";
import { TWITTER_UN, SITE_URL } from "../../../../lib/constants";

function actualSlug({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${slugSegments.join("/")}`;
}

function IndexMeta({ post }) {
    const storyColorStyle = `
        :root { 
            --storyColor: ${post.storyColor};
            --storyColor-rgb: ${post.storyColorRGB};
            --storyColor-h: ${post.storyColorH};
            --storyColor-s: ${post.storyColorS};
            --storyColor-l: ${post.storyColorL};
        }
    `;

    return (
        <Head>
            <title>{post.title}</title>
            <Meta />
            <meta name="title" content={post.title} />
            <meta name="description" content={post.description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`${SITE_URL}tl/${actualSlug(post)}`} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.description} />
            <meta property="og:image" content={`${SITE_URL}img/tl/${actualSlug(post)}/assets/${post.cover}`} />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={`${SITE_URL}tl/${actualSlug(post)}`} />
            <meta property="twitter:title" content={post.title} />
            <meta
                property="twitter:description"
                content={post.description}
            />
            <meta property="twitter:image" content={`${SITE_URL}img/tl/${actualSlug(post)}/assets/${post.cover}`} />
            <meta property="twitter:creator" content={TWITTER_UN} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
            <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
            <style>{storyColorStyle}</style>
        </Head>
    );
}

export default IndexMeta;