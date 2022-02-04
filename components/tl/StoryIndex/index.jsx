import Markdown from "markdown-to-jsx";
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
import { CommentVA, CommentWriter, CommentTN } from "./Comments";
import Footer from "../../footer";

function StoryIndex({ post }) {
    return (
        <>
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
                                    <Markdown>{post.description}</Markdown>
                                    {post.descSource ? (
                                        <a href={post.descSource}> ➹</a>
                                    ) : null}
                                </div>
                                <InfoBox post={post} />
                                {post.extra ? <ExtraInfo post={post} /> : null}
                                {post.commentWriter ? (
                                    <CommentWriter post={post} />
                                ) : null}
                                {post.commentVA ? (
                                    <CommentVA post={post} />
                                ) : null}
                                {post.commentTN ? (
                                    <CommentTN post={post} />
                                ) : null}
                                {post.images ? <Gallery post={post} /> : null}
                                {post.newEra ? (
                                    <Cards2 post={post} />
                                ) : (
                                    <Cards1 post={post} />
                                )}
                            </div>
                            <div className="chapters__wrapper">
                                <Chapters post={post} />
                                {post.miniTalkSections ? (
                                    <MiniTalks post={post} />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}

export default StoryIndex;
