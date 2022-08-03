import styles from "../StoryIndex.module.scss";

function actualSlug({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${slugSegments.join("/")}`;
}

function Banner({ post }) {
    return (
        <div
            className={styles.banner}
            style={{
                backgroundImage: `
                    url(/img/tl/${actualSlug(post)}/assets/${post.banner})
                `
            }}
        />
    );
}

export default Banner;
