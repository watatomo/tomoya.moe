import Markdown from "markdown-to-jsx";
import styles from "../StoryIndex.module.scss";

function InfoBox({ post }) {
    const { characters, translator, proofreader } = post;

    return (
        <div className={styles.info}>
            {post.season ? (
                <div className={`${styles.item} ${styles.season}`}>
                    <div className={styles.label}>Season</div>
                    <div className={styles.value}>{post.season}</div>
                </div>
            ) : null}
            {post.chapterTotal ? (
                <div className={`${styles.item} ${styles.chapters}`}>
                    <div className={styles.label}>Chapters</div>
                    <div className={styles.value}>{post.chapterTotal}</div>
                </div>
            ) : null}
            {post.writer ? (
                <div className={`${styles.item} ${styles.writer}`}>
                    <div className={styles.label}>Writer</div>
                    <div className={styles.value}>{post.writer}</div>
                </div>
            ) : null}
            <div className={`${styles.item} ${styles.characters}`}>
                <div className={styles.label}>Characters</div>
                <div className={styles.value}>
                    {characters.map((chara) => (
                        <span
                            character={chara}
                            title={chara}
                            aira-label={chara}
                            key={chara}
                        />
                    ))}
                </div>
            </div>
            <div className={`${styles.item} ${styles.tl}`}>
                <div className={styles.label}>Translation</div>
                <div className={styles.value}>
                    <Markdown>{post.translator}</Markdown>
                </div>
            </div>
            {post.proofreader ? (
                <div className={`${styles.item} ${styles.pr}`}>
                    <div className={styles.label}>Proofreading</div>
                    <div className={styles.value}>
                        <Markdown>{post.proofreader}</Markdown>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default InfoBox;
