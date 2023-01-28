import Link from "next/link";
import styles from "../StoryIndex.module.scss";

function deriveFirstChapter({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `/tl/${slugSegments.join("/")}/1`;
}

function Title({ post }) {
    return (
        <div className={styles.title__wrapper}>
            <h1 className={styles.en}>{post.title}</h1>
            {post.titleJp ? (
                <h2 className={styles.jp}>{post.titleJp}</h2>
            ) : null}
            <div className={styles.start}>
                <Link href={deriveFirstChapter(post)}>Start Reading</Link>
            </div>
        </div>
    );
}

export default Title;
