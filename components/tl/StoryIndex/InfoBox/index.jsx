function InfoBox({ post }) {
    const {characters} = post;
    const storyCharacters = characters.map((v) => (
        <span character={v} key={v} />
    ));

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
                    {storyCharacters}
                </div>
            </div>
            <div className="item tl">
                <div className="label">Translation</div>
                <div className="value">
                    {post.translator}
                </div>
            </div>
            <div className="item pr">
                <div className="label">Proofreading</div>
                <div className="value">
                    {post.proofreader}
                </div>
            </div>
        </div>
    );
}

export default InfoBox;