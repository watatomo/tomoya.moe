function Banner({ src }) {
    const bannerImg = `background-image:url(${src})`;

    return (
        <div className="banner__wrapper">
            <div className="banner" style={bannerImg} />
        </div>
    );
}

export default Banner;
