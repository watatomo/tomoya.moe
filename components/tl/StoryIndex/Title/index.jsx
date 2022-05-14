import Link from "next/link";

function deriveFirstChapter({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `/tl/${slugSegments.join("/")}/1`;
}

function Title({ post }) {
    return (
        <div className="title__wrapper">
            <h1 className="title-en">{post.title}</h1>
            {post.titleJp ? <h2 className="title-jp">{post.titleJp}</h2> : null}
            <div className="title-start">
                <Link href={deriveFirstChapter(post)}>
                    <a>Start Reading</a>
                </Link>
            </div>
        </div>
    );
}

export default Title;
