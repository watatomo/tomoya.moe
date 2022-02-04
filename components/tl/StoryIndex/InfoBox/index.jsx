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
            <div className="item chapters">
                <div className="label">Chapters</div>
                <div className="value">{post.chapterTotal}</div>
            </div>
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
                    {translator.map((t) =>
                        t.href ? (
                            <a href={t.href} key={t}>
                                {t.name}
                            </a>
                        ) : (
                            <span key={t}>{t.name}</span>
                        )
                    )}
                </div>
            </div>
            {post.proofreader ? (
                <div className="item pr">
                    <div className="label">Proofreading</div>
                    <div className="value">
                        {proofreader.map((p) =>
                            p.href ? (
                                <a href={p.href} key={p}>
                                    {p.name}
                                </a>
                            ) : (
                                <span key={p}>{p.name}</span>
                            )
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default InfoBox;
