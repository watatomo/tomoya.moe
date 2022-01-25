/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @next/next/no-img-element */
// import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Meta from "../../meta";
// import Banner from "../Banner";
import { TWITTER_UN } from "../../../lib/constants";
// import banner from "../../../public/img/tl/sanctuary/assets/card_still_full1_2887_normal.webp";

function StoryIndex({ post }) {
    return (
        <article>
            <Head>
                <title>{post.title}</title>
                <Meta />
                <meta name="title" content={post.title} />
                <meta name="description" content={post.description} />
                <meta property="og:type" content="article" />
                {/* <meta property="og:url" content={SITE_URL} /> */}
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
                <meta property="og:image" content={post.cover} />
                <meta property="twitter:card" content="summary" />
                {/* <meta property="twitter:url" content= /> */}
                <meta property="twitter:title" content={post.title} />
                <meta
                    property="twitter:description"
                    content={post.description}
                />
                <meta property="twitter:image" content={post.cover} />
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
            <div className="index__wrapper">
                <div
                    className="banner"
                    style={{ backgroundImage: `url(${post.banner})` }}
                />
                <div className="index-container__wrapper">
                    <div className="index-container">
                        <div className="cover">
                            <div>
                                <img src={post.cover} alt="Story cover" />
                            </div>
                        </div>
                        <div className="title__wrapper">
                            <h1 className="title-en">{post.title}</h1>
                            <h2 className="title-jp">{post.titleJp}</h2>
                            <div className="title-start">
                                <a href="1">Start Reading</a>
                            </div>
                        </div>
                        <div className="info__wrapper">
                            <div className="synopsis">
                                {post.descriptionFull}
                            </div>
                            <div className="info">
                                <div className="info-item season">
                                    <div className="label">Season</div>
                                    <div className="value">{post.season}</div>
                                </div>
                                <div className="info-item chapters">
                                    <div className="label">Chapters</div>
                                    <div className="value">
                                        {post.chapterTotal}
                                    </div>
                                </div>
                                <div className="info-item writer">
                                    <div className="label">Writer</div>
                                    <div className="value">{post.akira}</div>
                                </div>
                                <div className="info-item characters">
                                    <div className="label">Characters</div>
                                    <div className="value">
                                        <span character="Hajime" />{" "}
                                        <span character="Tomoya" />{" "}
                                        <span character="Tori" />{" "}
                                        <span character="Mitsuru" />{" "}
                                        <span character="Subaru" />{" "}
                                        <span character="Yuzuru" />{" "}
                                        <span character="Eichi" />{" "}
                                        <span character="Wataru" />{" "}
                                        <span character="Nazuna" />{" "}
                                        <span character="Gatekeeper" />
                                    </div>
                                </div>
                                <div className="info-item tl">
                                    <div className="label">Translators</div>
                                    <div className="value">
                                        <a href="https://maonuis.tumblr.com">
                                            Nui
                                        </a>
                                        , <a href="https://tomoya.moe">Ren</a>
                                    </div>
                                </div>
                                <div className="info-item pr">
                                    <div className="label">Proofreaders</div>
                                    <div className="value">
                                        <a href="https://honeyspades.tumblr.com">
                                            honeyspades
                                        </a>
                                        ,{" "}
                                        <a href="https://twitter.com/trystofstarrs">
                                            remi
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default StoryIndex;
