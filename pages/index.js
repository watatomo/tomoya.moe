import styled from "styled-components";
import StarBG from "../components/StarBG";
import Head from "next/head";
import Image from "next/image";
import { TWITTER_UN, SITE_TITLE } from "../lib/constants";
import splash from "../public/img/tl/transparency and masks/still_1677_normal.webp";
import Icon from "../public/img/home_icon.png";

const StyledWrapper = styled.div``;

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
                <meta name="theme-color" content="#eedcb3" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&subset=japanese&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="home__wrapper">
                <StarBG />
                <div className="home-content">
                    <div className="container01">
                        <div className="icon">
                            <div>
                                <div className="wrapper">
                                    <Image
                                        src={Icon}
                                        quality="100"
                                        objectFit="fill"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <div className="part01">
                                <span className="jp-text highlight">
                                    普通で真面目が取り柄
                                </span>
                                <hr />
                                <h1>
                                    <span className="highlight">ren.</span> 18.
                                </h1>
                                <h2>se asian. he/him.</h2>
                                <span>
                                    "translator," "developer," "artist."
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="nav-bar">
                        <span>page is a wip...</span>
                    </div>
                </div>
            </div>
        </>
    );
}
