import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import { TWITTER_UN, SITE_TITLE } from "../lib/constants";
import splash from "../public/img/tl/transparency and masks/still_1677_normal.webp";
import Icon from "../public/img/icon.png";
import SideImg from "../public/img/card_rectangle4_2888_evolution.png";

const StyledWrapper = styled.div`
    .home__wrapper {
    }
`;

export default function Home({}) {
    return (
        <>
            <Head>
                <title>{SITE_TITLE}</title>
                <meta name="description" content={TWITTER_UN} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content={SITE_TITLE} />
                <meta name="description" content={TWITTER_UN} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tomoya.moe/" />
                <meta property="og:title" content={SITE_TITLE} />
                <meta property="og:description" content={TWITTER_UN} />
                <meta property="og:image" content={splash.src} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://tomoya.moe/" />
                <meta property="twitter:title" content={SITE_TITLE} />
                <meta property="twitter:description" content={TWITTER_UN} />
                <meta property="twitter:image" content={splash.src} />
                <meta name="theme-color" content="#f1c755" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="home__wrapper">
                <div className="width-wrapper">
                    <div className="home__banner">
                        <div className="inner-wrapper">
                            <div className="column-one">
                                <p>ren・he/him・eighteen</p>
                                <p>se asian・aquarius</p>
                            </div>
                            <div className="column-two"> </div>
                        </div>
                    </div>
                    <div className="home__container-main">
                        <div className="side-image"></div>
                        <div className="box">
                            <p>
                                an average college student with an interest in
                                code, translation, and art. <br />
                                also likes boba, maids, and rabbits.
                            </p>
                            <p>
                                i like tomowata a normal amount.
                                <br />
                                <a href="https://ensemble-stars.jp/characters/mashiro_tomoya">
                                    tomoya mashiro
                                </a>{" "}
                                kins me btw.
                            </p>
                            <p>
                                riamuP | drastarsP
                                <br />
                                drama clubP | shinonome fan (pjsk)
                            </p>
                            <p>page still a wip...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
