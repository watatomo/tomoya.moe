/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import IndexMeta from "./IndexMeta";
import Banner from "./Banner";
import Cover from "./Cover";
import Title from "./Title";
import InfoBox from "./InfoBox";
import ExtraInfo from "./ExtraInfo";
import Gallery from "./Gallery";
import Chapters from "./Chapters";
import MiniTalks from "./MiniTalks";
import { Cards1, Cards2 } from "./Cards";

function StoryIndex({ post }) {
    return (
        <article>
            <IndexMeta post={post} />
            <div className="index__wrapper">
                <Banner post={post} />
                <div className="index-container__wrapper">
                    <div className="index-container">
                        <Cover post={post} />
                        <Title post={post} />
                        <div className="info__wrapper">
                            <div className="synopsis">
                                {post.description}
                            </div>
                            <InfoBox post={post} />
                            <ExtraInfo post={post} />
                            {/* <div className="comments">
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
                            </div> */}
                            <Gallery post={post} />
                            { post.newEra ? (
                                <Cards2 post={post} />
                            )
                                : <Cards1 post={post} />
                            }
                        </div>
                        <div className="chapters__wrapper">
                            {/* <Chapters post={post} /> 
                            <MiniTalks post={post} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default StoryIndex;
