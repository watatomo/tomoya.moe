function Title({ post }) {
    const firstChapter = `${post.actualStory}/1`;
    
    return (
        <div className="title__wrapper">
            <h1 className="title-en">{post.title}</h1>
            <h2 className="title-jp">{post.titleJp}</h2>
            <div className="title-start">
                <a href={firstChapter}>Start Reading</a>
            </div>
        </div>
    );
}

export default Title;
