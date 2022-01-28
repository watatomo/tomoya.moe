function Banner({ post }) {
    return (
        <div
            className="banner"
            style={{ 
                backgroundImage: `
                    url(/img/tl/${post.actualStory}/assets/${post.banner})
                ` 
            }}
        />
    );
}

export default Banner;
