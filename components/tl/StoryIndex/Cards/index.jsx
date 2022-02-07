/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Collapse } from "react-collapse";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function actualSlug({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${slugSegments.join("/")}`;
}

export function Cards1({ post }) {
    const { cards } = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className="story-cards">
            <button
                type="button"
                className={
                    visible ? "collapsible-header active" : "collapsible-header"
                }
                onClick={handleClick}
            >
                <span>Associated Cards</span>
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </button>
            <Collapse isOpened={visible}>
                <div className="collapsible-body">
                    <div className="cards">
                        {cards.map((v) => (
                            <div className="item" key={v}>
                                <div className="image">
                                    <div className="single unbloomed">
                                        <img
                                            src={`/img/tl/${actualSlug(
                                                post
                                            )}/assets/${v.src1}`}
                                            alt={v.name}
                                        />
                                    </div>
                                    <div className="single bloomed">
                                        <img
                                            src={`/img/tl/${actualSlug(
                                                post
                                            )}/assets/${v.src2}`}
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
            </Collapse>
        </div>
    );
}

export function Cards2({ post }) {
    const { cards } = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className="story-cards">
            <button
                type="button"
                className={
                    visible ? "collapsible-header active" : "collapsible-header"
                }
                onClick={handleClick}
            >
                <span>Associated Cards</span>
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </button>
            <Collapse
                isOpened={visible}
                theme={{
                    collapse: "collapse__wrapper",
                    content: "collapse-content"
                }}
            >
                <div className="collapsible-body">
                    <div className="cards">
                        {cards.map((v) => (
                            <div className="item" key={v}>
                                <div className="image">
                                    <div className="single unbloomed">
                                        <img
                                            src={`/img/tl/${actualSlug(
                                                post
                                            )}/assets/${v.src1}`}
                                            alt={v.name}
                                        />
                                    </div>
                                    <div className="single bloomed">
                                        <img
                                            src={`/img/tl/${actualSlug(
                                                post
                                            )}/assets/${v.src2}`}
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
            </Collapse>
        </div>
    );
}
