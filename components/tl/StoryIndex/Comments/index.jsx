import Markdown from "markdown-to-jsx";
import Fn from "../../Footnotes";

export function CommentVA({ post }) {
    const {commentVA, commentVAs} = post;

    return (
        <div className="comments">
            <div className="collapsible-header">
                { commentVAs ? (
                    <span>Voice Actors' Comments</span>
                ) : (
                    <span>Voice Actor's Comment</span>
                )}
            </div>
            <div className="collapsible-body">
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
            </div>
        </div>
    );
}

export function CommentWriter({ post }) {
    const {commentWriter} = post;

    return (
        <div className="comments">
            <div className="collapsible-header">
                <span>Writer's Comment</span>
            </div>
            <div className="collapsible-body">
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
            </div>
        </div>
    );
}

export function CommentTN({ post }) {
    const {commentTN} = post;

    return (
        <div className="comments">
            <div className="collapsible-header">
                <span>Translation Notes</span>
            </div>
            <div className="collapsible-body">
                {commentTN.map((c) => (
                    <div key={c}>
                        <Markdown>{c.comment}</Markdown>
                    </div>
                ))}
            </div>
        </div>
    );
}