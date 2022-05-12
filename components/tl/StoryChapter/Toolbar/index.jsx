import {
    faChevronLeft,
    faChevronRight,
    faStar
    // faFillDrip
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { TextSize } from "../../../svgicon";
import config from "../../../../mako.config";
import styles from "./Toolbar.module.scss";

function derivePreviousNextURL({ slug, tl, newSegment }) {
    const slugSegments = slug.split("/");
    slugSegments[slugSegments.length - 1] = newSegment;
    return `/${tl}/${slugSegments.join("/")}`;
}

function deriveIndexURL({ slug, tl }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `/${tl}/${slugSegments.join("/")}`;
}

function deriveIndexURLMT({ slug, tl }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    slugSegments.pop();
    slugSegments.pop();
    return `/${tl}/${slugSegments.join("/")}`;
}

function Toolbar({ post }) {
    const tl = config.translationsPath || "tl";
    const isStandaloneChapter = !post.previous && !post.next && !post.miniTalk;

    return (
        <div className={styles.toolbar__wrapper}>
            <div className={styles.toolbar}>
                <div
                    className={`${styles.toolbar__section} ${styles.previous}`}
                >
                    {post.previous ? (
                        <a
                            href={derivePreviousNextURL({
                                slug: post.slug,
                                tl,
                                newSegment: post.previous
                            })}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </a>
                    ) : null}
                </div>

                {/* <div className={`${styles.toolbar__section} ${styles.fill}`}>
                    <FontAwesomeIcon icon={faFillDrip} />
                </div> */}

                {!isStandaloneChapter &&
                    (post.miniTalk ? (
                        <div
                            className={`${styles.toolbar__section} ${styles.index}`}
                        >
                            <a href={deriveIndexURLMT({ slug: post.slug, tl })}>
                                <FontAwesomeIcon icon={faStar} />
                            </a>
                        </div>
                    ) : (
                        <div
                            className={`${styles.toolbar__section} ${styles.index}`}
                        >
                            <a href={deriveIndexURL({ slug: post.slug, tl })}>
                                <FontAwesomeIcon icon={faStar} />
                            </a>
                        </div>
                    ))}

                {/* <div className={`${styles.toolbar__section} ${styles.size}`}>
                    <TextSize />
                </div> */}

                <div className={`${styles.toolbar__section} ${styles.next}`}>
                    {post.next ? (
                        <a
                            href={derivePreviousNextURL({
                                slug: post.slug,
                                tl,
                                newSegment: post.next
                            })}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Toolbar;
