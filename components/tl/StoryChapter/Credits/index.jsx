import Markdown from "markdown-to-jsx";
// import ReactMarkdown  from "react-markdown";

function Credits({ tl, tlc, qc }) {
    return (
        <div className="credits__wrapper">
            <div className="credits">
                {tl ? (
                    <div className="tl">
                        <span className="label">Translation</span>
                        <Markdown
                            options={{
                                forceWrapper: true
                            }}
                        >
                            {tl}
                        </Markdown>
                    </div>
                ) : null}

                {tlc ? (
                    <div className="tlc">
                        <span className="label">Translation Check</span>
                        <Markdown
                            options={{
                                forceWrapper: true
                            }}
                        >
                            {tlc}
                        </Markdown>
                    </div>
                ) : null}

                {qc ? (
                    <div className="qc">
                        <span className="label">Quality Check</span>
                        <Markdown
                            options={{
                                forceWrapper: true
                            }}
                        >
                            {qc}
                        </Markdown>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Credits;
