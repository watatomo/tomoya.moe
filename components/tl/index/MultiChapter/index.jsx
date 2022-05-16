/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { storyListMulti } from "./stories";

function MultiChapter() {
    return (
        <div className="multi-container">
            {storyListMulti.map((s) => (
                <Link key={s} href={`/tl/${s.story}`}>
                    <a className="multi-container__item">
                        <div className="cover">
                            <img
                                src={`/img/tl/${s.story}/assets/${s.cover}`}
                                alt={s.title}
                            />
                        </div>
                        <div className="data">
                            <div className="header">
                                <h2 className="title">{s.title}</h2>
                                <h3 className="stats">
                                    {s.writer ? (
                                        <span className="writer">
                                            {s.writer}
                                        </span>
                                    ) : null}
                                    <span className="chapters">
                                        {s.chapters} Chapters
                                    </span>
                                    <span className="series">{s.series}</span>
                                </h3>
                            </div>
                            <div className="body">
                                <Markdown>{s.description}</Markdown>
                            </div>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default MultiChapter;
