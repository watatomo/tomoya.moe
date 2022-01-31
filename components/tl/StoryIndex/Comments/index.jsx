import React from "react";
import Collapse from "@kunukn/react-collapse";
import cx from "classnames";
import Markdown from "markdown-to-jsx";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fn from "../../Footnotes";

export function CommentVA({ post }) {
    const {commentVA, commentVAs} = post;
    const [isOpen, setIsOpen] = React.useState(false);
    const onToggle = () => setIsOpen(s => !s);
    const onChange = props => console.log(props);

    return (
        <div className="comments">
            <div className={cx("collapsible-header", {
                "active": isOpen
            })} onClick={onToggle} aria-hidden="true">
                { commentVAs ? (
                    <span>Voice Actors&apos; Comments</span>
                ) : (
                    <span>Voice Actor&apos;s Comment</span>
                )}
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </span>
            </div>
            <Collapse className={cx("collapsible-body", {
                "active": isOpen
            })} isOpen={isOpen} onChange={onChange}>
                {commentVA.map((c) => (
                    <div className="item" key={c}>
                        <Markdown
                            options={{
                                forceInline: true,
                                overrides: {
                                    Fn: {
                                        component: Fn
                                    }
                                }
                            }}>{c.comment}</Markdown>
                        <div className="source">
                            <Markdown>{c.source}</Markdown>
                        </div>
                    </div>
                ))}
            </Collapse>
        </div>
    );
}

export function CommentWriter({ post }) {
    const {commentWriter} = post;
    const [isOpen, setIsOpen] = React.useState(false);
    const onToggle = () => setIsOpen(s => !s);
    const onChange = props => console.log(props);

    return (
        <div className="comments">
            <div className={cx("collapsible-header", {
                "active": isOpen
            })} onClick={onToggle} aria-hidden="true">
                <span>Writer&apos;s Comment</span>
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </span>
            </div>
            <Collapse className={cx("collapsible-body", {
                "active": isOpen
            })} isOpen={isOpen} onChange={onChange}>
                {commentWriter.map((c) => (
                    <div key={c}>
                        <Markdown
                            options={{
                                forceInline: true,
                                overrides: {
                                    Fn: {
                                        component: Fn
                                    }
                                }
                            }}>{c.comment}</Markdown>
                        <div className="source">
                            <Markdown>{c.source}</Markdown>
                        </div>
                    </div>
                ))}
            </Collapse>
        </div>
    );
}

export function CommentTN({ post }) {
    const {commentTN} = post;
    const [isOpen, setIsOpen] = React.useState(false);
    const onToggle = () => setIsOpen(s => !s);
    const onChange = props => console.log(props);

    return (
        <div className="comments">
            <div className={cx("collapsible-header", {
                "active": isOpen
            })} onClick={onToggle} aria-hidden="true">
                <span>Translation Notes</span>
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </span>
            </div>
            <Collapse className={cx("collapsible-body", {
                "active": isOpen
            })} isOpen={isOpen} onChange={onChange}>
                {commentTN.map((c) => (
                    <div key={c}>
                        <Markdown>{c.comment}</Markdown>
                    </div>
                ))}
            </Collapse>
        </div>
    );
}