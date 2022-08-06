/* eslint-disable @next/next/no-img-element */
// import Markdown from "markdown-to-jsx";
import { storyListSingle } from "./stories";
import Link from "next/link";
import styles from "./SingleChapter.module.scss";

function SingleChapter() {
    return (
        <div className={styles.container}>
            {storyListSingle.map((single) => (
                <div className={styles.container__item} key={single}>
                    <div className={styles.cover}>
                        <img
                            src={`/img/tl/${single.story}/${single.cover}`}
                            alt={single.title}
                        />
                    </div>
                    <Link href={`/tl/${single.story}`}>
                        <a className={styles.title}>
                            <span>{single.title}</span>
                            <button type="button">Read</button>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default SingleChapter;
