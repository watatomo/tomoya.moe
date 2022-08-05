/* eslint-disable react/jsx-props-no-spreading */
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import "react-tabs/style/react-tabs.css";
import { Fn, Tln } from "../Footnotes";
import Action from "../../Mashiro/Action";
import Bubble from "../../Mashiro/Bubble";
import Cw from "../../Mashiro/Cw";
import Location from "../../Mashiro/Location";
import Narration from "../../Mashiro/Narration";
import Season from "../../Mashiro/Season";
import Thought from "../../Mashiro/Thought";
import Toolbar from "./Toolbar";
import Credits from "./Credits";
import { MiniTalk, MiniTalkType, Possibility } from "./MiniTalk";
import ChapterMeta from "./ChapterMeta";
import Choice from "../../Mashiro/Choice";
import Footer from "../../footer";
import Header from "../../header";
import styles from "./StoryChapter.module.scss";

function StoryChapter({ post }) {
    return (
        <>
            <Header toolbar={<Toolbar post={post} />} />
            <article>
                <ChapterMeta post={post} />
                <div className={styles.wrapper}>
                    <div className={styles.mashiro__wrapper}>
                        <div className={styles.mashiro}>
                            <MDXRemote
                                {...post.content}
                                components={{
                                    Bubble,
                                    Fn,
                                    Tln,
                                    Thought,
                                    Action,
                                    Season,
                                    Location,
                                    Narration,
                                    Cw,
                                    Image,
                                    Credits,
                                    MiniTalk,
                                    MiniTalkType,
                                    Possibility,
                                    Choice
                                }}
                            />
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}

export default StoryChapter;
