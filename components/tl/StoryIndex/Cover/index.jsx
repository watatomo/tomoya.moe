/* eslint-disable @next/next/no-img-element */
import config from "../../../../mako.config";

function deriveCoverImage({ slug, tl, newSegment }) {
    const slugSegments = slug.split("/");
    slugSegments[slugSegments.length - 1] = newSegment;
    return `/img/${tl}/${slugSegments.join("/assets/")}`;
}

const tl = config.translationsPath || "tl";

function Cover({ post }) {
    return (
        <div className="cover">
            <div>
                <img 
                    src={deriveCoverImage({
                        slug: post.slug,
                        tl,
                        newSegment: post.cover
                    })}
                    alt="Story cover" 
                />
            </div>
        </div>
    );
}

export default Cover;