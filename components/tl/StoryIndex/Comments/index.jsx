import { useState } from "react";
import { Collapse } from "react-collapse";
import Markdown from "markdown-to-jsx";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fn from "../../Footnotes";

export function CommentVA({ post }) {
    const { commentVA, commentVAs } = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className="comments">
            <button
                type="button"
                className={
                    visible ? "collapsible-header active" : "collapsible-header"
                }
                onClick={handleClick}
            >
                {commentVAs ? (
                    <span>Voice Actors&apos; Comments</span>
                ) : (
                    <span>Voice Actor&apos;s Comment</span>
                )}
                <span className="arrow">
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
                <div className="collapsible-body">
                    {commentVA.map((c) => (
                        <div className="item" key={c}>
                            <Markdown
                                className="comment"
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
                            <div className="source">
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
        <div className="comments">
            <button
                type="button"
                className={
                    visible ? "collapsible-header active" : "collapsible-header"
                }
                onClick={handleClick}
            >
                <span>Writer&apos;s Comment</span>
                <span className="arrow">
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
                <div className="collapsible-body">
                    {commentWriter.map((c) => (
                        <div key={c}>
                            <Markdown
                                className="comment"
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
                            <div className="source">
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
        <div className="comments">
            <button
                type="button"
                className={
                    visible ? "collapsible-header active" : "collapsible-header"
                }
                onClick={handleClick}
            >
                <span>Translation Notes</span>
                <span className="arrow">
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
                <div className="collapsible-body">
                    {commentTN.map((c) => (
                        <div className="comment" key={c}>
                            <Markdown>{c.comment}</Markdown>
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
    );
}
