import { useState } from "react";
import Markdown from "markdown-to-jsx";
import { Collapse } from "react-collapse";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../StoryIndex.module.scss";

function ExtraInfo({ post }) {
    const { extra } = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className={styles.extra}>
            <button
                type="button"
                className={
                    visible
                        ? `${styles.header} ${styles.active}`
                        : `${styles.header}`
                }
                onClick={handleClick}
            >
                <span>Extra Information</span>
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
                    {extra.map((v) => (
                        <div className={styles.item} key={v}>
                            <div className={styles.label}>{v.label}</div>
                            <div className={styles.value}>
                                <Markdown>{v.value}</Markdown>
                            </div>
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
    );
}

export default ExtraInfo;
