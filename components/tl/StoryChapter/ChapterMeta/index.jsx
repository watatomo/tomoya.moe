import Head from "next/head";
import Meta from "../../../meta";
import { TWITTER_UN, SITE_URL } from "../../../../lib/constants";

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
            <Meta />
            <meta name="title" content={post.title} />
            <meta name="description" content={post.description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`${SITE_URL}tl/${actualSlug(post)}`} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.description} />
            {post.previewImg ? (
                <meta property="og:image" content={`${SITE_URL}img/tl/${getPreviewImage(post)}/${post.previewImg}`} />
            ) : 
                <meta property="og:image" content={`${SITE_URL}img/tl/${actualSlug(post)}/1.jpg`} />
            }
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={`${SITE_URL}tl/${actualSlug(post)}`} />
            <meta property="twitter:title" content={post.title} />
            <meta
                property="twitter:description"
                content={post.description}
            />
            {post.previewImg ? (
                <meta property="twitter:image" content={`${SITE_URL}img/tl/${getPreviewImage(post)}/${post.previewImg}`} />
            ) : 
                <meta property="twitter:image" content={`${SITE_URL}img/tl/${actualSlug(post)}/1.jpg`} />
            }
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