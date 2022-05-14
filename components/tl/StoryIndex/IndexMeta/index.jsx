import Head from "next/head";
import { TWITTER_UN, SITE_URL } from "../../../../lib/constants";

function actualSlug({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${slugSegments.join("/")}`;
}

function IndexMeta({ post }) {
    const storyColorStyle = `
        :root { 
            --storycolor: ${post.storyColor};
            --storycolor-rgb: ${post.storyColorRGB};
            --storycolor-h: ${post.storyColorH};
            --storycolor-s: ${post.storyColorS};
            --storycolor-l: ${post.storyColorL};
        }
    `;

    return (
        <Head>
            <title>{post.title}</title>
            <meta name="title" content={post.title} />
            {post.description ? (
                <meta
                    property="description"
                    content={post.description
                        .replace(/\.\.\./g, "…")
                        .replace(/<\/?[^>]+(>|$)/g, "")}
                />
            ) : null}
            <meta property="og:type" content="article" />
            <meta
                property="og:url"
                content={`${SITE_URL}tl/${actualSlug(post)}`}
            />
            <meta property="og:title" content={post.title} />
            {post.description ? (
                <meta
                    property="og:description"
                    content={post.description
                        .replace(/\.\.\./g, "…")
                        .replace(/<\/?[^>]+(>|$)/g, "")}
                />
            ) : null}
            <meta
                property="og:image"
                content={`${SITE_URL}img/tl/${actualSlug(post)}/assets/${
                    post.cover
                }`}
            />
            <meta property="twitter:card" content="summary" />
            <meta
                property="twitter:url"
                content={`${SITE_URL}tl/${actualSlug(post)}`}
            />
            <meta property="twitter:title" content={post.title} />
            {post.description ? (
                <meta
                    property="twitter:description"
                    content={post.description
                        .replace(/\.\.\./g, "…")
                        .replace(/<\/?[^>]+(>|$)/g, "")}
                />
            ) : null}
            <meta
                property="twitter:image"
                content={`${SITE_URL}img/tl/${actualSlug(post)}/assets/${
                    post.cover
                }`}
            />
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
