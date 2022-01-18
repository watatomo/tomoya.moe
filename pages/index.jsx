/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TWITTER_UN, SITE_TITLE, THEME_COLOR } from "../lib/constants";
import splash from "../public/img/tl/transparency and masks/still_1677_normal.webp";
import Icon from "../public/img/home_icon.png";
import StarBG from "../components/index/StarBG";

export default function Home() {
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
                <meta name="theme-color" content={THEME_COLOR} />
            </Head>
            <div className="home__wrapper">
                <StarBG />
                <div className="home-content">
                    <div className="width-wrapper">
                        <div className="container01">
                            <div className="icon">
                                <div>
                                    <div className="wrapper">
                                        <Image
                                            src={Icon}
                                            quality="100"
                                            objectFit="fill"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text">
                                <div className="section01">
                                    <span className="jp-text highlight">
                                        普通で真面目が取り柄
                                    </span>
                                    <hr />
                                    <h1>
                                        <span className="highlight">ren.</span>{" "}
                                        18.
                                    </h1>
                                    <h2>se asian. he/him.</h2>
                                    <div className="home__links">
                                        <a href="https://twitter.com/riamuyumemi">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a href="https://github.com/watatomo">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href="mailto:ren@tomoya.moe">
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home__nav">
                            <a href="#1">page is a wip...</a>
                        </div>
                        <div className="container02" />
                    </div>
                </div>
            </div>
        </>
    );
}
