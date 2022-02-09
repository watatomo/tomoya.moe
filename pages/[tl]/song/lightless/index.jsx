/* eslint-disable react/jsx-key */
import dynamic from "next/dynamic";
import styled from "styled-components";
import Head from "next/head";
import Meta from "../../../../components/meta";
import { TWITTER_UN, SITE_URL } from "../../../../lib/constants";
import { lines2 } from "../../../../components/tl/song/Lightless/lines";

const Lyrics = dynamic(
    () => import("../../../../components/tl/song/Lightless/vertical"),
    {
        ssr: false
    }
);

function LightlessPage() {
    const entries = [
        { lang: "jp", name: "Japanese" },
        { lang: "rm", name: "Romaji" },
        { lang: "en", name: "English" }
    ].map((v) => ({
        label: v.name,
        panel: (
            <div>
                {lines2.map((l) => {
                    if (!l.lines[v.lang]) {
                        return <hr />;
                    }
                    return <p>{l.lines[v.lang]}</p>;
                })}
            </div>
        ),
        key: v.lang
    }));
    return (
        <>
            <Head>
                <title>Lightless | Lyrics</title>
                <Meta />

                <meta
                    name="description"
                    content="Lightless (ライトレス) - Agnes Tachyon (CV: Sumire Uesaka)"
                />
                {/* <!-- Primary Meta Tags --> */}
                <meta name="title" content="Lightless | Lyrics" />
                <meta
                    name="description"
                    content="Lightless (ライトレス) - Agnes Tachyon (CV: Sumire Uesaka)"
                />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content={`${SITE_URL}tl/song/lightless`}
                />
                <meta property="og:title" content="Lightless | Lyrics<" />
                <meta
                    property="og:description"
                    content="Lightless (ライトレス) - Agnes Tachyon (CV: Sumire Uesaka)"
                />
                <meta
                    property="og:image"
                    content={`${SITE_URL}img/tl/song/lightless/cover.png`}
                />

                <meta name="twitter:card" content="player" />
                <meta name="twitter:site" content={TWITTER_UN} />
                <meta name="twitter:title" content="Lightless | Lyrics" />
                <meta
                    name="twitter:description"
                    content="Click on the play button to start listening along with the translation!"
                />
                <meta
                    name="twitter:image"
                    content={`${SITE_URL}img/tl/song/lightless/cover.png`}
                />
                <meta
                    name="twitter:player"
                    content={`${SITE_URL}tl/song/lightless/embed`}
                />
                <meta name="twitter:player:width" content="480" />
                <meta name="twitter:player:height" content="240" />
                <style>{`
        
        html body { 
          background: white;
          color: black;
          padding: 0 40px;
        }
        @media only screen and (max-width: 500px) {
          html body { 
            padding: 0px;
          }
        }
        @media only screen and (max-width: 400px) {
          .rhap_controls-section {
            min-width: unset !important;
            flex: 0 0 auto !important;
          }
          .rhap_volume-controls {
            display: none !important;
          }
        }
        `}</style>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&family=Quicksand:wght@300..700&display=swap"
                    rel="stylesheet"
                />
                <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
            </Head>
            <Wrapper className="pagewrapper">
                <div className="background" />
                <article>
                    <h1>Lightless</h1>
                    <h2>Agnes Tachyon (CV: Sumire Uesaka)</h2>
                    <h3>
                        <b>Lyricist, composer, arranger:</b> TAKU INOUE
                    </h3>
                    <Lyrics />
                </article>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    --yk-song-text-color: hsl(160, 21%, 95%);

    /* width: 100%;
  height: 100vh;
  overflow-y: scroll; */

    .background {
        background: 100% / cover url("/img/tl/song/lightless/background.png");
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
    }

    h1 {
        color: white;
        font-size: 2em;
        margin-bottom: 0.25em;
    }
    h2 {
        color: white;
        opacity: 0.8;
    }

    h3 {
        color: white;
        font-size: 1em;
        margin-bottom: 0.75em;
        line-height: 1.4;
        font-weight: 500;
    }

    article {
        position: relative;
        max-width: 500px;
        /* margin: auto; */
        margin-top: max(50vh, 300px);
        margin-right: auto;
        margin-bottom: 20px;
        /* background: hsla(0, 0%, 100%, 1); */
        /* border-radius: 7.5px; */
        /* border: solid 1px #d3d3d3ff; */
        line-height: 1.2em;

        p {
            margin: 0.5em 0;
            text-align: center;
        }

        hr {
            margin: 1em 0;
            opacity: 0;
        }
    }

    .player {
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 500px;

        height: 250px;
        z-index: 1000;
        overflow: hidden;
        border-radius: 15px;

        & > * {
            height: 100%;
        }
        .yuukun-song__wrapper {
            height: 100%;
        }
    }

    .tab-container {
        display: flow-root;
        background: hsla(0, 0%, 100%, 1);
    }
    .tab-container .label-container {
        position: relative;
        z-index: 100;
        position: sticky;
        top: 0px;
        background: hsla(0, 0%, 100%, 1);
        /* color: white; */
        display: flex;
        /* border-bottom: solid 1px hsla(0, 0%, 0%, 0.3); */
        /* margin: 5px; */
        /* border-radius: 5px; */
    }

    /* label item */
    .tab-container .label-container .label-item {
        padding: 0.75em 1em;
        display: block;
        cursor: pointer;
        flex: 1 1 30%;
        text-align: center;
        opacity: 0.3;
        transition: 0.2s ease;
        font-weight: 900;
        box-shadow: inset 0px -3px black;
    }

    .tab-container .label-container .label-item-active {
        opacity: 1;
        /* transform: scale(1.05); */
    }
    /* panel container */
    .tab-container .panel-container {
        padding: 10px 10px;
        padding: 1em;
    }

    /* panel item */
    .tab-container .panel-container .panel-item-inactive {
        display: none;
    }

    .tab-container .panel-container .panel-item-evaluating {
        position: absolute;
        z-index: -1;
        display: block;
        visibility: hidden;
    }
    .tab-container .panel-container {
    }
`;

export default LightlessPage;
