import Markdown from "markdown-to-jsx";

function InfoBox({ post }) {
    const { characters, translator, proofreader } = post;

    return (
        <div className="info">
            {post.season ? (
                <div className="item season">
                    <div className="label">Season</div>
                    <div className="value">{post.season}</div>
                </div>
            ) : null}
            {post.chapterTotal ? (
                <div className="item chapters">
                    <div className="label">Chapters</div>
                    <div className="value">{post.chapterTotal}</div>
                </div>
            ) : null}
            {post.writer ? (
                <div className="item writer">
                    <div className="label">Writer</div>
                    <div className="value">{post.writer}</div>
                </div>
            ) : null}
            <div className="item characters">
                <div className="label">Characters</div>
                <div className="value">
                    {characters.map((v) => (
                        <span character={v} key={v} />
                    ))}
                </div>
            </div>
            <div className="item tl">
                <div className="label">Translation</div>
                <div className="value">
                    <Markdown>{post.translator}</Markdown>
                </div>
            </div>
            {post.proofreader ? (
                <div className="item pr">
                    <div className="label">Proofreading</div>
                    <div className="value">
                        <Markdown>{post.proofreader}</Markdown>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default InfoBox;
