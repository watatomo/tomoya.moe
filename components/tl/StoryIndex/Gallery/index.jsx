/* eslint-disable @next/next/no-img-element */
function actualSlug({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${slugSegments.join("/")}`;
}

function Gallery({ post }) {
    const {images} = post;

    return (
        <div className="gallery">
            <div className="collapsible-header">
                <span>CG Gallery</span>
            </div>
            <div className="collapsible-body">
                <div className="gallery__wrapper">
                    {images.map((v) => (
                        <div
                            className="item"
                            key={v}
                        >
                            <div className="image">
                                <img
                                    src={`/img/tl/${actualSlug(post)}/assets/${v.src}`}
                                    alt={v.caption}
                                />
                            </div>
                            <div className="caption">
                                {v.caption}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;