function deriveFirstChapter({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `/tl/${slugSegments.join("/")}/1`;
}

function Title({ post }) {
    return (
        <div className="title__wrapper">
            <h1 className="title-en">{post.title}</h1>
            <h2 className="title-jp">{post.titleJp}</h2>
            <div className="title-start">
                <a href={deriveFirstChapter(post)}>Start Reading</a>
            </div>
        </div>
    );
}

export default Title;
