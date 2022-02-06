import Head from "next/head";
import Meta from "../../../meta";
import { TWITTER_UN, SITE_URL, SITE_TITLE } from "../../../../lib/constants";

function TLMeta() {
    return (
        <Head>
            <title>{SITE_TITLE} | Translations</title>
            <Meta />
            <meta name="title" content={`${SITE_TITLE} | Translations`} />
            <meta name="description" content="Translation Archive" />
            <meta property="og:type" content="profile" />
            <meta property="og:url" content={`${SITE_URL}tl`} />
            <meta
                property="og:title"
                content={`${SITE_TITLE} | Translations`}
            />
            <meta property="og:description" content="Translation Archive" />
            <meta
                property="og:image"
                content={`${SITE_URL}img/home_banner.png`}
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`${SITE_URL}tl`} />
            <meta
                property="twitter:title"
                content={`${SITE_TITLE} | Translations`}
            />
            <meta
                property="twitter:description"
                content="Translation Archive"
            />
            <meta
                property="twitter:image"
                content={`${SITE_URL}img/home_banner.png`}
            />
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

export default TLMeta;
