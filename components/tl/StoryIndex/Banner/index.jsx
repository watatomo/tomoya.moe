import config from "../../../../mako.config";

function deriveBannerImage({ slug, tl, newSegment }) {
    const slugSegments = slug.split("/");
    slugSegments[slugSegments.length - 1] = newSegment;
    return `/img/${tl}/${slugSegments.join("/assets/")}`;
}

const tl = config.translationsPath || "tl";

function Banner({ post }) {
    return (
        <div
            className="banner"
            style={{ 
                backgroundImage: deriveBannerImage({
                    slug: post.slug,
                    tl,
                    newSegment: post.banner
                })
            }}
        />
    );
}

export default Banner;
