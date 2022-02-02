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

function Gallery({ post }) {
    const {images} = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    }
    
    return (
        <div className="gallery">
            <button
                type="button"
                className={visible ? "collapsible-header active" : "collapsible-header"}
                onClick={handleClick}
            >
                <span>CG Gallery</span>
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </span>
            </button>
            <Collapse isOpened={visible}>
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
            </Collapse>
        </div>
    );
}

export default Gallery;