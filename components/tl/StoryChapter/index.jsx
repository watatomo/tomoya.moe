/* eslint-disable react/jsx-props-no-spreading */
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Head from "next/head";
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
import Toolbar from "../Toolbar";
import Credits from "../Credits";
import Meta from "../../meta";
import { TWITTER_UN } from "../../../lib/constants";

function StoryChapter({ post }) {
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
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
                <meta property="twitter:card" content="summary" />
                {/* <meta property="twitter:url" content= /> */}
                <meta property="twitter:title" content={post.title} />
                <meta
                    property="twitter:description"
                    content={post.description}
                />
                {/* <meta property="twitter:image" content={post.ogImage.url} /> */}
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
                                Credits
                            }}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default StoryChapter;
