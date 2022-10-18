import dynamic from "next/dynamic";
import styled from "styled-components";
import Head from "next/head";
// import "react-tabber/dist/theme/gray.css";
// import { singers, lines2 } from "../../../components/Tl/Song/lines";
import { SONG_INFO } from "./SONG_INFO";
import SITE_INFO from "../SITE_INFO.json";

const Lyrics = dynamic(
    () => import("./../../../../components/tl/song/vertical"),
    {
        ssr: false
    }
);

function Song() {
    return (
        <>
            <Head>
                <title>{SONG_INFO?.NAME} | Translation</title>

                <meta name="description" content={SONG_INFO?.DESCRIPTION} />
                {/* <!-- Primary Meta Tags --> */}
                <meta
                    name="title"
                    content={`${SONG_INFO?.NAME} | Translation`}
                />
                <meta name="description" content={SONG_INFO?.DESCRIPTION} />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content={`${SITE_INFO?.TL_URL}${SONG_INFO?.SLUG}`}
                />
                <meta
                    property="og:title"
                    content={`${SONG_INFO?.NAME} | Translation`}
                />
                <meta
                    property="og:description"
                    content={SONG_INFO?.DESCRIPTION}
                />
                <meta property="og:image" content={SONG_INFO?.COVER.src} />

                <meta name="theme-color" content={SONG_INFO?.OG_COLOR} />

                <meta name="twitter:card" content="player" />
                <meta name="twitter:site" content={SONG_INFO?.TWITTER} />
                <meta name="twitter:title" content={SONG_INFO?.NAME} />
                <meta
                    name="twitter:description"
                    content="Click on the play button to start listening along with the translation!"
                />
                <meta name="twitter:image" content={SONG_INFO?.COVER.src} />
                <meta
                    name="twitter:player"
                    content={`${SITE_INFO?.TL_URL}${SONG_INFO?.SLUG}/embed`}
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
            </Head>
            <Wrapper
                className="pagewrapper"
                style={{
                    "--yk-song-background-image": `url(${SONG_INFO?.BG_IMAGE.src})`
                }}
            >
                <div className="background" />
                <article>
                    <h1>{SONG_INFO?.NAME}</h1>
                    <h2>{SONG_INFO?.ARTIST}</h2>
                    <h3>
                        Translated and proofread by{" "}
                        {SONG_INFO?.TLPR.map((t, i) => (
                            <a key={t} href={`https://twitter.com/${t}`}>
                                @{t}
                                {`${
                                    i + 1 !== SONG_INFO?.TLPR.length ? " " : ""
                                }${
                                    i + 2 === SONG_INFO?.TLPR.length
                                        ? "and "
                                        : ""
                                }`}
                            </a>
                        ))}
                    </h3>
                    {/* {SONG_INFO.YOUTUBE && (
                        <iframe
                            className="youtube"
                            width="100%"
                            src={`https://www.youtube.com/embed/${SONG_INFO.YOUTUBE}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    )} */}
                    <Lyrics SONG_INFO={SONG_INFO} />
                </article>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    --yk-song-text-color: hsl(160, 21%, 95%);

    .background {
        background: left center / cover
            var(
                --yk-song-background-image,
                url("/tl/song/lightless/background.png")
            );
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

    .youtube {
        width: 100%;
        aspect-ratio: 16/9;
        margin: 0.75em 0;
        border-radius: 10px;
    }
    article {
        position: relative;
        max-width: 500px;
        margin-top: max(20vh, 100px);
        margin-right: auto;
        margin-bottom: 20px;
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
        display: flex;
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
`;

export default Song;
