function InfoBox({ post }) {
    const {characters, translator, proofreader} = post;

    return (
        <div className="info">
            <div className="item season">
                <div className="label">Season</div>
                <div className="value">{post.season}</div>
            </div>
            <div className="item chapters">
                <div className="label">Chapters</div>
                <div className="value">
                    {post.chapterTotal}
                </div>
            </div>
            <div className="item writer">
                <div className="label">Writer</div>
                <div className="value">{post.writer}</div>
            </div>
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
                    {translator.map((t) => (
                        <a href={t.href} key={t}>{t.name}</a>
                    ))}
                </div>
            </div>
            <div className="item pr">
                <div className="label">Proofreading</div>
                <div className="value">
                    {proofreader.map((p) => (
                        <a href={p.href} key={p}>{p.name}</a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InfoBox;