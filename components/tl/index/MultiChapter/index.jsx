/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import { storyListMulti } from "./stories";

function MultiChapter() {
    return (
        <div className="multi-container">
            {storyListMulti.map((s) => (
                <div className="item" key={s}>
                    <div className="cover">
                        <a href={`/tl/${s.story}`}>
                            <img
                                src={`/img/tl/${s.story}/assets/${s.cover}`}
                                alt={s.title}
                            />
                        </a>
                    </div>
                    <div className="data">
                        <div className="header">
                            <h2 className="title">{s.title}</h2>
                            <h3 className="stats">
                                {s.writer} • {s.chapters} Chapters
                            </h3>
                        </div>
                        <div className="body">
                            <Markdown>{s.description}</Markdown>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MultiChapter;
