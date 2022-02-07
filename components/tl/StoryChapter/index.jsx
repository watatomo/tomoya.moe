/* eslint-disable react/jsx-props-no-spreading */
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import "react-tabs/style/react-tabs.css";
import Fn from "../Footnotes";
import {
    Bubble,
    BubbleHidden,
    BubbleUnknown,
    Thought,
    Season,
    Location,
    Narration,
    Cw
} from "../../mashiro";
import Toolbar from "./Toolbar";
import Credits from "./Credits";
import { MiniTalk, MiniTalkType, Possibility } from "./MiniTalk";
import ChapterMeta from "./ChapterMeta";
// import Footer from "../../footer";
import Header from "../../header";

function StoryChapter({ post }) {
    return (
        <>
            <Header toolbar={<Toolbar post={post} />} />
            <article>
                <ChapterMeta post={post} />
                <div className="chapter__wrapper">
                    <div className="mashiro__wrapper">
                        <div className="mashiro">
                            <MDXRemote
                                {...post.content}
                                components={{
                                    Bubble,
                                    BubbleHidden,
                                    BubbleUnknown,
                                    Fn,
                                    Thought,
                                    Season,
                                    Location,
                                    Narration,
                                    Cw,
                                    Image,
                                    Credits,
                                    MiniTalk,
                                    MiniTalkType,
                                    Possibility
                                }}
                            />
                        </div>
                    </div>
                </div>
            </article>
            {/* <Footer /> */}
        </>
    );
}

export default StoryChapter;
