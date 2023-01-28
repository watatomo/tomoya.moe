/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { storyListMulti } from "./stories";
import styles from "./MultiChapter.module.scss";

function MultiChapter() {
    return (
        <div className={styles.container}>
            {storyListMulti.map((multi) => (
                <Link
                    key={multi}
                    href={`/tl/${multi.story}`}
                    className={styles.container__item}
                >
                    <div className={styles.cover}>
                        <img
                            src={`/img/tl/${multi.story}/assets/${multi.cover}`}
                            alt={multi.title}
                        />
                    </div>
                    <div className={styles.data}>
                        <div className={styles.header}>
                            <span className={styles.title}>{multi.title}</span>
                            <span className={styles.stats}>
                                {multi.writer ? (
                                    <span className={styles.writer}>
                                        {multi.writer}
                                    </span>
                                ) : null}
                                <span className={styles.chapters}>
                                    {multi.chapters} Chapters
                                </span>
                                {/* <span className={styles.series}>{multi.series}</span> */}
                            </span>
                        </div>
                        <div className={styles.body}>
                            <Markdown>{multi.description}</Markdown>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default MultiChapter;
