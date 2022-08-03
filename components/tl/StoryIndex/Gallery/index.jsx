/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Collapse } from "react-collapse";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../StoryIndex.module.scss";

function actualSlug({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `${slugSegments.join("/")}`;
}

function Gallery({ post }) {
    const { images } = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className={styles.gallery}>
            <button
                type="button"
                className={
                    visible
                        ? `${styles.header} ${styles.active}`
                        : `${styles.header}`
                }
                onClick={handleClick}
            >
                <span>CG Gallery</span>
                <span className={styles.arrow}>
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
                <div className={styles.body}>
                    <div className={styles.gallery__wrapper}>
                        {images.map((v) => (
                            <div className={styles.item} key={v}>
                                <div className={styles.image}>
                                    <img
                                        src={`/img/tl/${actualSlug(
                                            post
                                        )}/assets/${v.src}`}
                                        alt={v.caption}
                                    />
                                </div>
                                <div className={styles.caption}>
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
