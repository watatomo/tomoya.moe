import Head from "next/head";
import { TWITTER_UN, BASE_URL } from "../../../../lib/constants";

function actualSlug({ slug }) {
    const slugSegments = slug.split("/");
    return `${slugSegments.join("/")}`;
}

function getPreviewImage({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${slugSegments.join("/")}`;
}

function ChapterMeta({ post }) {
    return (
        <Head>
            <title>{post.title}</title>
            <meta name="title" content={post.title} />
            {post.description ? (
                <meta
                    property="description"
                    content={post.description.replace(/\.\.\./g, "…")}
                />
            ) : null}
            <meta property="og:type" content="article" />
            <meta
                property="og:url"
                content={`${BASE_URL}tl/${actualSlug(post)}`}
            />
            <meta property="og:title" content={post.title} />
            {post.description ? (
                <meta
                    property="og:description"
                    content={post.description.replace(/\.\.\./g, "…")}
                />
            ) : null}
            {post.previewImg ? (
                <meta
                    property="og:image"
                    content={`${BASE_URL}img/tl/${getPreviewImage(post)}/${
                        post.previewImg
                    }`}
                />
            ) : (
                <meta
                    property="og:image"
                    content={`${BASE_URL}img/tl/${actualSlug(post)}/1.jpg`}
                />
            )}
            <meta property="twitter:card" content="summary" />
            <meta
                property="twitter:url"
                content={`${BASE_URL}tl/${actualSlug(post)}`}
            />
            <meta property="twitter:title" content={post.title} />
            {post.description ? (
                <meta
                    property="twitter:description"
                    content={post.description.replace(/\.\.\./g, "…")}
                />
            ) : null}
            {post.previewImg ? (
                <meta
                    property="twitter:image"
                    content={`${BASE_URL}img/tl/${getPreviewImage(post)}/${
                        post.previewImg
                    }`}
                />
            ) : (
                <meta
                    property="twitter:image"
                    content={`${BASE_URL}img/tl/${actualSlug(post)}/1.jpg`}
                />
            )}
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
            <link href={`/css/${post.series}.css`} rel="stylesheet" />
        </Head>
    );
}

export default ChapterMeta;
