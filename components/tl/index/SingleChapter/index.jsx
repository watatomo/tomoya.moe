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
                            src={`/img/tl/${s.story}/assets/${s.cover}`}
                            alt={s.title}
                        />
                    </div>
                    <div className="data">
                        <div>
                            <div className="header">
                                <h2 className="title">{s.title}</h2>
                                <h3 className="stats">{s.writer}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SingleChapter;
