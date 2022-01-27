/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// import { MDXRemote } from "next-mdx-remote";
// import styled from "styled-components";
import Head from "next/head";
import Meta from "../../meta";
import { TWITTER_UN } from "../../../lib/constants";

function StoryIndex({ post }) {
    const firstChapter = `${post.actualStory}/1`;
    // const colorHex = `${post.storyColor}`;
    // const colorRGB = `${post.storyColorRGB}`;
    // const colorHue = `${post.storyColorH}`;
    // const colorSaturation = `${post.storyColorS}`;
    // const colorLightness = `${post.storyColorL}`;

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
                <div className="banner" style={{ backgroundImage: `url(${post.banner})` }} />
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
                                <a href={firstChapter}>Start Reading</a>
                            </div>
                        </div>
                        <div className="info__wrapper">
                            <div className="synopsis">
                                {post.descriptionFull}
                            </div>
                            <div className="info">
                                <div className="item season">
                                    <div className="label">Season</div>
                                    <div className="value">{post.season}</div>
                                </div>
                                <div className="item chapters">
                                    <div className="label">Chapters</div>
                                    <div className="value">
                                        {post.chapterTotal}
                                    </div>
                                </div>
                                <div className="item writer">
                                    <div className="label">Writer</div>
                                    <div className="value">{post.writer}</div>
                                </div>
                                <div className="item characters">
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
                                <div className="item tl">
                                    <div className="label">Translation</div>
                                    <div className="value">
                                        <a href="https://maonuis.tumblr.com">
                                            Nui
                                        </a>
                                        , <a href="https://tomoya.moe">Ren</a>
                                    </div>
                                </div>
                                <div className="item pr">
                                    <div className="label">Proofreading</div>
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
                            <div className="extra">
                                <div className="collapsible-header">
                                    <span>Extra Information</span>
                                </div>
                                <div className="collapsible-body">
                                    <div className="item">
                                        <div className="label">Event</div>
                                        <div className="value">
                                            SS Arc／6th Stage: Sanctuary
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="label">
                                            Event Duration
                                        </div>
                                        <div className="value">
                                            9/15/2021 (15:00 JST) - 9/23/2021
                                            (22:00 JST)
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="label">
                                            Related Stories
                                        </div>
                                        <div className="value">
                                            Phantom Thieves vs. Detectives,
                                            Transparency and Masks{" "}
                                            <a href="https://twitter.com/ensemble_stars/status/1439471818126004226">
                                                ➹
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="label">
                                            Special Thanks
                                        </div>
                                        <div className="value">
                                            <a href="https://twitter.com/bluefilaments">
                                                Ciel
                                            </a>
                                            ,{" "}
                                            <a href="https://twitter.com/dapporock">
                                                Simon
                                            </a>
                                            : Moral support and other members of
                                            the Sanctuary GC! You can read their
                                            translation of the story{" "}
                                            <a href="https://twitter.com/bluefilaments/status/1439284645657448456">
                                                here
                                            </a>
                                            .<br />
                                            <a href="https://twitter.com/kogadouVEVO">
                                                Koi
                                            </a>
                                            ,{" "}
                                            <a href="https://twitter.com/milkyshiffon">
                                                Lala
                                            </a>
                                            : For helping me out with phrasing
                                            and smoothing things out!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments">
                                <div className="collapsible-header">
                                    <span>
                                        Voice Actors' Comments
                                    </span>
                                </div>
                                <div className="collapsible-body">
                                    <div className="item">
                                        you know this pair is gonna make someone
                                        cry
                                        <div className="source">
                                            <a href="https://twitter.com/NOT_TAKASAKA/status/1436937514602811400">
                                                Tomoya Kousaka [@NOT_TAKASAKA].
                                                September 12, 2021.
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        I'm late but 😭
                                        <br />
                                        This pair is just so 😭
                                        fuckfuckfuckfuckfuck 😭
                                        <br />
                                        They look so good too 🌞 I have no words
                                        🙇‍♂️
                                        <div className="source">
                                            <a href="https://twitter.com/shun_shuuuun/status/1437298813119590402">
                                                Shunya Hiruma [@shun_shuuuun].
                                                September 13, 2021.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery">
                                <div className="collapsible-header">
                                    <span>CG Gallery</span>
                                </div>
                                <div className="collapsible-body">
                                    <div className="gallery__wrapper">
                                        <div className="item">
                                            <div className="image">
                                                <img src="/img/tl/sanctuary/assets/card_still_full1_2887_normal.webp" />
                                            </div>
                                            <div className="caption">
                                                Polluted Paradise (5)
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <img src="/img/tl/sanctuary/assets/card_still_full1_2887_evolution.webp" />
                                            </div>
                                            <div className="caption">
                                                Epilogue (5)
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <img src="/img/tl/sanctuary/assets/card_still_full1_2888_normal.webp" />
                                            </div>
                                            <div className="caption">
                                                Circuit of Happiness (12)
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <img src="/img/tl/sanctuary/assets/card_still_full1_2888_evolution.webp" />
                                            </div>
                                            <div className="caption">
                                                Epilogue (5)
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <img src="/img/tl/sanctuary/assets/card_still_full1_2889_normal.webp" />
                                            </div>
                                            <div className="caption">
                                                Circuit of Happiness (14)
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <img src="/img/tl/sanctuary/assets/card_still_full1_2889_evolution.webp" />
                                            </div>
                                            <div className="caption">
                                                Epilogue (4)
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <img src="/img/tl/sanctuary/assets/card_still_full1_2890_normal.webp" />
                                            </div>
                                            <div className="caption">
                                                Polluted Paradise (1)
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <img src="/img/tl/sanctuary/assets/card_still_full1_2890_evolution.webp" />
                                            </div>
                                            <div className="caption">
                                                Epilogue (4)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-cards">
                                <div className="collapsible-header">
                                    <div className="tab-header__name">Associated Cards</div>
                                </div>
                                <div className="collapsible-body">
                                    <div className="cards">
                                        <div className="item">
                                            <div className="image">
                                                <div className="single unbloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2887_normal.webp" />
                                                </div>
                                                <div className="single bloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2887_evolution.webp" />
                                                </div>
                                            </div>
                                            <div className="lightbox">
                                                <div className="card__name">[Secret Sanctuary] Wataru Hibiki</div>
                                                <div className="card__jp">[秘匿サンクチュアリ] 日々樹 渉</div>
                                                <div className="skills">
                                                    <ul>
                                                        <li id="center">
                                                            <div className="name">Sanctuary That Came into Being*</div>
                                                            <div className="desc">Increase all stats of Flash cards by 50%.</div>
                                                        </li>
                                                        <li id="live">
                                                            <div className="name">Grand Stage</div>
                                                            <div className="desc">Increases score by 40% for 5 seconds.</div>
                                                        </li>
                                                        <li id="support">
                                                            <div className="name">Back Alley of Loss</div>
                                                            <div className="desc">Increases the amount that the Ensemble Time gauge rises.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <div className="single unbloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2888_normal.webp" />
                                                </div>
                                                <div className="single bloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2888_evolution.webp" />
                                                </div>
                                            </div>
                                            <div className="lightbox">
                                                <div className="card__name">[Sanctuary of Great Improvement] Tomoya Mashiro</div>
                                                <div className="card__jp">[飛躍サンクチュアリ] 真白 友也</div>
                                                <div className="skills">
                                                    <ul>
                                                        <li id="center">
                                                            <div className="name">Sanctuary for Those Who Believe</div>
                                                            <div className="desc">Increases the Dance of Glitter cards by 120%.</div>
                                                        </li>
                                                        <li id="live">
                                                            <div className="name">Jumping into Trouble</div>
                                                            <div className="desc">Increases the score by 40% for 5 seconds.</div>
                                                        </li>
                                                        <li id="support">
                                                            <div className="name">Quietly Lurking in a Room</div>
                                                            <div className="desc">Decreases the amount that Voltage lowers.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <div className="single unbloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2889_normal.webp" />
                                                </div>
                                                <div className="single bloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2889_evolution.webp" />
                                                </div>
                                            </div>
                                            <div className="lightbox">
                                                <div className="card__name">[Sanctuary of Confusion] Tori Himemiya</div>
                                                <div className="card__jp">[戸惑いサンクチュアリ] 姫宮 桃李</div>
                                                <div className="skills">
                                                    <ul>
                                                        <li id="center">
                                                            <div className="name">Sanctuary of Bottled Up Feelings</div>
                                                            <div className="desc">Increases all stats of Glitter cards by 35%.</div>
                                                        </li>
                                                        <li id="live">
                                                            <div className="name">One's Determination</div>
                                                            <div className="desc">Increases score by 26% for 8 seconds.</div>
                                                        </li>
                                                        <li id="support">
                                                            <div className="name">Park Guide</div>
                                                            <div className="desc">Decreases the amount that Voltage lowers.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <div className="single unbloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2890_normal.webp" />
                                                </div>
                                                <div className="single bloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2890_evolution.webp" />
                                                </div>
                                            </div>
                                            <div className="lightbox">
                                                <div className="card__name">[Distant Sanctuary] Nazuna Nito</div>
                                                <div className="card__jp">[遠隔サンクチュアリ] 仁兎 なずな</div>
                                                <div className="skills">
                                                    <ul>
                                                        <li id="center">
                                                            <div className="name">Sanctuary That Is Protected</div>
                                                            <div className="desc">Increases the Dance of Sparkle cards by 80%.</div>
                                                        </li>
                                                        <li id="live">
                                                            <div className="name">Old-Fashioned Method</div>
                                                            <div className="desc">Increases the score by 16% for 12 seconds.</div>
                                                        </li>
                                                        <li id="support">
                                                            <div className="name">Marching into a Room</div>
                                                            <div className="desc">Increases the amount that the Ensemble Time gauge rises.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <div className="single unbloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2891_normal.webp" />
                                                </div>
                                                <div className="single bloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2891_evolution.webp" />
                                                </div>
                                            </div>
                                            <div className="lightbox">
                                                <div className="card__name">[Sanctuary of Realization] Eichi Tenshouin</div>
                                                <div className="card__jp">[実現サンクチュアリ] 天祥院 英智</div>
                                                <div className="skills">
                                                    <ul>
                                                        <li id="center">
                                                            <div className="name">Sanctuary That Is Opened</div>
                                                            <div className="desc">Increases all stats of Sparkle cards by 35%.</div>
                                                        </li>
                                                        <li id="live">
                                                            <div className="name">Ideal System</div>
                                                            <div className="desc">Increases score by 20% for 5 seconds.</div>
                                                        </li>
                                                        <li id="support">
                                                            <div className="name">Silent Scheme</div>
                                                            <div className="desc">Slightly increases the amount that the Ensemble Time gauge rises.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <div className="single unbloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2892_normal.webp" />
                                                </div>
                                                <div className="single bloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2892_evolution.webp" />
                                                </div>
                                            </div>
                                            <div className="lightbox">
                                                <div className="card__name">[Sanctuary of Progression] Yuzuru Fushimi</div>
                                                <div className="card__jp">[進行サンクチュアリ] 伏見 弓弦</div>
                                                <div className="skills">
                                                    <ul>
                                                        <li id="center">
                                                            <div className="name">Sanctuary Before One's Eyes</div>
                                                            <div className="desc">Increases the Vocal of Brilliant cards by 80%.</div>
                                                        </li>
                                                        <li id="live">
                                                            <div className="name">Inspiring Encouragement</div>
                                                            <div className="desc">Increases score by 14% for 8 seconds.</div>
                                                        </li>
                                                        <li id="support">
                                                            <div className="name">Exposition of Attraction</div>
                                                            <div className="desc">Slightly decreases the amount that Voltage lowers.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <div className="single unbloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2893_normal.webp" />
                                                </div>
                                                <div className="single bloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2893_evolution.webp" />
                                                </div>
                                            </div>
                                            <div className="lightbox">
                                                <div className="card__name">[Slowed-Down Sanctuary] Mitsuru Tenma</div>
                                                <div className="card__jp">[減速サンクチュアリ] 天満 光</div>
                                                <div className="skills">
                                                    <ul>
                                                        <li id="center">
                                                            <div className="name">Sanctuary That Is Free</div>
                                                            <div className="desc">Increases the stats of all Brilliant cards by 35%.</div>
                                                        </li>
                                                        <li id="live">
                                                            <div className="name">Positive Mindset</div>
                                                            <div className="desc">Increase score by 8% for 12 seconds.</div>
                                                        </li>
                                                        <li id="support">
                                                            <div className="name">Frustrating Habitat</div>
                                                            <div className="desc">Slightly decreases the amount that Voltage lowers.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image">
                                                <div className="single unbloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2894_normal.webp" />
                                                </div>
                                                <div className="single bloomed">
                                                    <img src="/img/tl/sanctuary/assets/card_rectangle2_2894_evolution.webp" />
                                                </div>
                                            </div>
                                            <div className="lightbox">
                                                <div className="card__name">[Sanctuary of Honest Effort] Hajime Shino</div>
                                                <div className="card__jp">[地道サンクチュアリ] 紫之 創</div>
                                                <div className="skills">
                                                    <ul>
                                                        <li id="center">
                                                            <div className="name">Sanctuary of My Special Someone</div>
                                                            <div className="desc">Increases the Dance of Flash cards by 80%.</div>
                                                        </li>
                                                        <li id="live">
                                                            <div className="name">Loose Support</div>
                                                            <div className="desc">Increases score by 20% for 5 seconds.</div>
                                                        </li>
                                                        <li id="support">
                                                            <div className="name">Organizing Feelings and Words</div>
                                                            <div className="desc">Slightly increases the amount that the Ensemble Time gauge rises.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chapters__wrapper">
                            <div className="chapters">
                                <ul>
                                    <li>
                                        <a href="1">Prologue</a>
                                    </li>
                                    <li>
                                        <span>Polluted Paradise</span>{" "}
                                        <a href="2">1</a> <a href="3">2</a>{" "}
                                        <a href="4">3</a> <a href="5">4</a>{" "}
                                        <a href="6">5</a> <a href="7">6</a>{" "}
                                        <a href="8">7</a> <a href="9">8</a>{" "}
                                        <a href="10">9</a> <a href="11">10</a>{" "}
                                        <a href="12">11</a> <a href="13">12</a>
                                    </li>
                                    <li>
                                        <span>Circuit of Happiness</span>{" "}
                                        <a href="14">1</a> <a href="15">2</a>{" "}
                                        <a href="16" id="none">
                                            3
                                        </a>{" "}
                                        <a href="17" id="none">
                                            4
                                        </a>{" "}
                                        <a href="18" id="none">
                                            5
                                        </a>{" "}
                                        <a href="19" id="none">
                                            6
                                        </a>{" "}
                                        <a href="20" id="none">
                                            7
                                        </a>{" "}
                                        <a href="21" id="none">
                                            8
                                        </a>{" "}
                                        <a href="22" id="none">
                                            9
                                        </a>{" "}
                                        <a href="23" id="none">
                                            10
                                        </a>{" "}
                                        <a href="24" id="none">
                                            11
                                        </a>{" "}
                                        <a href="25" id="none">
                                            12
                                        </a>{" "}
                                        <a href="26" id="none">
                                            13
                                        </a>{" "}
                                        <a href="27" id="none">
                                            14
                                        </a>{" "}
                                        <a href="28" id="none">
                                            15
                                        </a>{" "}
                                        <a href="29" id="none">
                                            16
                                        </a>{" "}
                                        <a href="30" id="none">
                                            17
                                        </a>{" "}
                                        <a href="31" id="none">
                                            18
                                        </a>{" "}
                                        <a href="32" id="none">
                                            19
                                        </a>
                                    </li>
                                    <li>
                                        <span>Epilogue</span>{" "}
                                        <a href="33" id="none">
                                            1
                                        </a>{" "}
                                        <a href="34" id="none">
                                            2
                                        </a>{" "}
                                        <a href="35" id="none">
                                            3
                                        </a>{" "}
                                        <a href="36" id="none">
                                            4
                                        </a>{" "}
                                        <a href="37" id="none">
                                            5
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mini-talks">
                                Mini Talks
                                <ul>
                                    <li>
                                        <span>Wataru Hibiki</span>

                                        <a href="mini_talk/wataru/1" id="none">
                                            1
                                        </a>
                                        <a href="mini_talk/wataru/2">2</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span>Tomoya Mashiro</span>
                                        <a href="mini_talk/tomoya/1" id="none">
                                            1
                                        </a>
                                        <a href="mini_talk/tomoya/2">2</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span>Tori Himemiya</span>
                                        <a href="mini_talk/tori/1" id="none">
                                            1
                                        </a>
                                        <a href="mini_talk/tori/2" id="none">
                                            2
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span>Nazuna Nito</span>
                                        <a href="mini_talk/nazuna/1" id="none">
                                            1
                                        </a>
                                        <a href="mini_talk/nazuna/2" id="none">
                                            2
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default StoryIndex;
