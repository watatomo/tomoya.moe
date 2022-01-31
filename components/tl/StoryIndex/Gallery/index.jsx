/* eslint-disable @next/next/no-img-element */
import React from "react";
import Collapse from "@kunukn/react-collapse";
import cx from "classnames";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function actualSlug({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${slugSegments.join("/")}`;
}

function Gallery({ post }) {
    const {images} = post;
    const [isOpen, setIsOpen] = React.useState(false);
    const onToggle = () => setIsOpen(s => !s);
    const onChange = props => console.log(props);
    
    return (
        <div className="gallery">
            <div className={cx("collapsible-header", {
                "active": isOpen
            })} onClick={onToggle} aria-hidden="true">
                <span>CG Gallery</span>
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </span>
            </div>
            <Collapse className={cx("collapsible-body", {
                "active": isOpen
            })} isOpen={isOpen} onChange={onChange}>
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
            </Collapse>
        </div>
    );
}

export default Gallery;