/* eslint-disable @next/next/no-img-element */
// import Markdown from "markdown-to-jsx";
import { storyListSingle } from "./stories";
import Link from "next/link";
import styles from "./SingleChapter.module.scss";

function SingleChapter() {
    return (
        <div className={styles.container}>
            {storyListSingle.map((s) => (
                <div className={styles.container__item} key={s}>
                    <div className={styles.cover}>
                        <img
                            src={`/img/tl/${s.story}/${s.cover}`}
                            alt={s.title}
                        />
                    </div>
                    <Link href={`/tl/${s.story}`}>
                        <a className={styles.title}>
                            <span>{s.title}</span>
                            <button type="button">Read</button>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default SingleChapter;
