import { useState } from "react";
import { Collapse } from "react-collapse";
import Markdown from "markdown-to-jsx";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fn } from "../../Footnotes";
import styles from "../StoryIndex.module.scss";

export function CommentVA({ post }) {
    const { commentVA, commentVAs } = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className={styles.comments}>
            <button
                type="button"
                className={
                    visible
                        ? `${styles.header} ${styles.active}`
                        : `${styles.header}`
                }
                onClick={handleClick}
            >
                {commentVAs ? (
                    <span>Voice Actors&apos; Comments</span>
                ) : (
                    <span>Voice Actor&apos;s Comment</span>
                )}
                <span className={styles.arrow}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </button>
            <Collapse
                isOpened={visible}
                theme={{
                    collapse: "collapse__wrapper",
                    content: "collapse-content"
                }}
            >
                <div className={styles.body}>
                    {commentVA.map((c) => (
                        <div className={styles.item} key={c}>
                            <Markdown
                                className={styles.comment}
                                options={{
                                    forceInline: true,
                                    overrides: {
                                        Fn: {
                                            component: Fn
                                        }
                                    }
                                }}
                            >
                                {c.comment}
                            </Markdown>
                            <div className={styles.source}>
                                <Markdown>{c.source}</Markdown>
                            </div>
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
    );
}

export function CommentWriter({ post }) {
    const { commentWriter } = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className={styles.comments}>
            <button
                type="button"
                className={
                    visible
                        ? `${styles.header} ${styles.active}`
                        : `${styles.header}`
                }
                onClick={handleClick}
            >
                <span>Writer&apos;s Comment</span>
                <span className={styles.arrow}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </button>
            <Collapse
                isOpened={visible}
                theme={{
                    collapse: "collapse__wrapper",
                    content: "collapse-content"
                }}
            >
                <div className={styles.body}>
                    {commentWriter.map((c) => (
                        <div key={c}>
                            <Markdown
                                className={styles.comment}
                                options={{
                                    forceInline: true,
                                    overrides: {
                                        Fn: {
                                            component: Fn
                                        }
                                    }
                                }}
                            >
                                {c.comment}
                            </Markdown>
                            <div className={styles.source}>
                                <Markdown>{c.source}</Markdown>
                            </div>
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
    );
}

export function CommentTN({ post }) {
    const { commentTN } = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className={styles.comments}>
            <button
                type="button"
                className={
                    visible
                        ? `${styles.header} ${styles.active}`
                        : `${styles.header}`
                }
                onClick={handleClick}
            >
                <span>Translation Notes</span>
                <span className={styles.arrow}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </button>
            <Collapse
                isOpened={visible}
                theme={{
                    collapse: "collapse__wrapper",
                    content: "collapse-content"
                }}
            >
                <div className={styles.body}>
                    {commentTN.map((c) => (
                        <div className={styles.comment} key={c}>
                            <Markdown>{c.comment}</Markdown>
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
    );
}
