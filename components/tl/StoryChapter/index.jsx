/* eslint-disable react/jsx-props-no-spreading */
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
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
import { MiniTalk, Option } from "./MiniTalk";
import ChapterMeta from "./ChapterMeta";
// import Footer from "../../footer";

function StoryChapter({ post }) {
    return (
        <>
            <article>
                <ChapterMeta post={post} />
                <div className="chapter__wrapper">
                    <div className="mashiro__wrapper">
                        <Toolbar post={post} />
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
                                    Option
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
