/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TWITTER_UN, SITE_URL, SITE_TITLE, META_DESC } from "../lib/constants";
import banner from "../public/img/home_banner.png";
import Icon from "../public/img/home_icon.png";
import Meta from "../components/meta";
import StarBG from "../components/index/StarBG";

export default function Home() {
    return (
        <>
            <Head>
                <title>{SITE_TITLE}</title>
                <Meta />
                <meta name="title" content={SITE_TITLE} />
                <meta name="description" content={META_DESC} />
                <meta property="og:type" content="profile" />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:title" content={SITE_TITLE} />
                <meta property="og:description" content={META_DESC} />
                <meta property="og:image" content={banner.src} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={SITE_URL} />
                <meta property="twitter:title" content={SITE_TITLE} />
                <meta property="twitter:description" content={META_DESC} />
                <meta property="twitter:image" content={banner.src} />
                <meta property="twitter:creator" content={TWITTER_UN} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&family=Quicksand:wght@300..700&display=swap"
                    rel="stylesheet"
                />
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
                                            priority
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
