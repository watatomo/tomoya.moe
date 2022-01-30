/* eslint-disable @next/next/no-img-element */
function actualSlug({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${slugSegments.join("/")}`;
}

export function Cards1({ post }) {
    const {cards} = post;

    return (
        <div className="story-cards">
            <div className="collapsible-header">
                <span>Associated Cards</span>
            </div>
            <div className="collapsible-body">
                <div className="cards">
                    {cards.map((v) => (
                        <div
                            className="item"
                            key={v}
                        >
                            <div className="image">
                                <div className="single unbloomed">
                                    <img
                                        src={`/img/tl/${actualSlug(post)}/assets/${v.src1}`}
                                        alt={v.name}
                                    />
                                </div>
                                <div className="single bloomed">
                                    <img
                                        src={`/img/tl/${actualSlug(post)}/assets/${v.src2}`}
                                        alt={v.name}
                                    />
                                </div>
                            </div>
                            <div className="lightbox">
                                <div className="card__name">{v.name}</div>
                                <div className="card__jp">{v.nameJp}</div>
                                <div className="skills">
                                    <ul>
                                        <li id="live">
                                            <div className="name">
                                                {v.liveName}
                                            </div>
                                            <div className="desc">
                                                {v.liveDesc}
                                            </div>
                                        </li>
                                        <li id="lesson">
                                            <div className="name">
                                                {v.lessonName}
                                            </div>
                                            <div className="desc">
                                                {v.lessonDesc}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function Cards2({ post }) {
    const {cards} = post;

    return (
        <div className="story-cards">
            <div className="collapsible-header">
                <span>Associated Cards</span>
            </div>
            <div className="collapsible-body">
                <div className="cards">
                    {cards.map((v) => (
                        <div
                            className="item"
                            key={v}
                        >
                            <div className="image">
                                <div className="single unbloomed">
                                    <img
                                        src={`/img/tl/${actualSlug(post)}/assets/${v.src1}`}
                                        alt={v.name}
                                    />
                                </div>
                                <div className="single bloomed">
                                    <img
                                        src={`/img/tl/${actualSlug(post)}/assets/${v.src2}`}
                                        alt={v.name}
                                    />
                                </div>
                            </div>
                            <div className="lightbox">
                                <div className="card__name">{v.name}</div>
                                <div className="card__jp">{v.nameJP}</div>
                                <div className="skills">
                                    <ul>
                                        <li id="center">
                                            <div className="name">
                                                {v.centerName}
                                            </div>
                                            <div className="desc">
                                                {v.centerDesc}
                                            </div>
                                        </li>
                                        <li id="live">
                                            <div className="name">
                                                {v.liveName}
                                            </div>
                                            <div className="desc">
                                                {v.liveDesc}
                                            </div>
                                        </li>
                                        <li id="support">
                                            <div className="name">
                                                {v.supportName}
                                            </div>
                                            <div className="desc">
                                                {v.supportDesc}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}