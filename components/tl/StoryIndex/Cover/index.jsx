/* eslint-disable @next/next/no-img-element */
function actualSlug({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${slugSegments.join("/")}`;
}

function Cover({ post }) {
    return (
        <div className="cover">
            <div>
                <img 
                    src={`/img/tl/${actualSlug(post)}/assets/${post.cover}`}
                    alt="Story cover" 
                />
            </div>
        </div>
    );
}

export default Cover;