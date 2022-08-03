/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { storyListMulti } from "./stories";
import styles from "./MultiChapter.module.scss";

function MultiChapter() {
    return (
        <div className={styles.container}>
            {storyListMulti.map((s) => (
                <Link key={s} href={`/tl/${s.story}`}>
                    <a className={styles.container__item}>
                        <div className={styles.cover}>
                            <img
                                src={`/img/tl/${s.story}/assets/${s.cover}`}
                                alt={s.title}
                            />
                        </div>
                        <div className={styles.data}>
                            <div className={styles.header}>
                                <span className={styles.title}>{s.title}</span>
                                <span className={styles.stats}>
                                    {s.writer ? (
                                        <span className={styles.writer}>
                                            {s.writer}
                                        </span>
                                    ) : null}
                                    <span className={styles.chapters}>
                                        {s.chapters} Chapters
                                    </span>
                                    {/* <span className={styles.series}>{s.series}</span> */}
                                </span>
                            </div>
                            <div className={styles.body}>
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
