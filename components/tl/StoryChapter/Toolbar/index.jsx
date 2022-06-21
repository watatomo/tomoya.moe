import Link from "next/link";
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
                {/* <div
                    className={`${styles.toolbar__section} ${styles.previous}`}
                > */}
                <div>
                    {post.previous ? (
                        <Link
                            href={derivePreviousNextURL({
                                slug: post.slug,
                                tl,
                                newSegment: post.previous
                            })}
                        >
                            <a>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </a>
                        </Link>
                    ) : null}
                </div>

                {/* <div className={`${styles.toolbar__section} ${styles.fill}`}>
                    <FontAwesomeIcon icon={faFillDrip} />
                </div> */}

                {!isStandaloneChapter &&
                    (post.miniTalk ? (
                        // <div
                        //     className={`${styles.toolbar__section} ${styles.index}`}
                        // >
                        <div>
                            <Link
                                href={deriveIndexURLMT({
                                    slug: post.slug,
                                    tl
                                })}
                            >
                                <a>
                                    <FontAwesomeIcon icon={faStar} />
                                </a>
                            </Link>
                        </div>
                    ) : (
                        // <div
                        //     className={`${styles.toolbar__section} ${styles.index}`}
                        // >
                        <div>
                            <Link
                                href={deriveIndexURL({
                                    slug: post.slug,
                                    tl
                                })}
                            >
                                <a>
                                    <FontAwesomeIcon icon={faStar} />
                                </a>
                            </Link>
                        </div>
                    ))}

                {/* <div className={`${styles.toolbar__section} ${styles.size}`}>
                    <TextSize />
                </div> */}

                {/* <div className={`${styles.toolbar__section} ${styles.next}`}> */}
                <div>
                    {post.next ? (
                        <Link
                            href={derivePreviousNextURL({
                                slug: post.slug,
                                tl,
                                newSegment: post.next
                            })}
                        >
                            <a>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a>
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Toolbar;
