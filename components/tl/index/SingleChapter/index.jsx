/* eslint-disable @next/next/no-img-element */
// import Markdown from "markdown-to-jsx";
import { storyListSingle } from "./stories";

function SingleChapter() {
    return (
        <div className="single-container">
            {storyListSingle.map((s) => (
                <div className="item" key={s}>
                    <div className="cover">
                        <img
                            src={`/img/tl/${s.story}/${s.cover}`}
                            alt={s.title}
                        />
                    </div>
                    <a href={`/tl/${s.story}`} className="title">
                        <span>{s.title}</span>
                        <button type="button">Read</button>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default SingleChapter;
