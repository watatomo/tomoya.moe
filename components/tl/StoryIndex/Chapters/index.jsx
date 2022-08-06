import Link from "next/link";
import styles from "../StoryIndex.module.scss";

function deriveIndex({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `/tl/${slugSegments.join("/")}/`;
}

function Chapters({ post }) {
    const { chapterSections } = post;

    return (
        <div className={styles.chapters}>
            <ul>
                {chapterSections.map((section) => (
                    <li key={JSON.stringify(section)}>
                        {section.chapters.map((chapter) =>
                            chapter.href ? (
                                chapter.none ? (
                                    <a key={chapter} className={styles.none}>
                                        {chapter.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={chapter}
                                        href={`${deriveIndex(post)}${
                                            chapter.href
                                        }`}
                                    >
                                        <a>{chapter.label}</a>
                                    </Link>
                                )
                            ) : (
                                <span key={chapter}>{chapter.name}</span>
                            )
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Chapters;
