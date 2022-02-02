/* eslint-disable no-nested-ternary */
import { useState } from "react";
import { Collapse } from "react-collapse";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function deriveIndex({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `/tl/${slugSegments.join("/")}/mini_talk/`;
}

function MiniTalks({ post }) {
    const { miniTalkSections } = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    }

    return (
        <div className="mini-talks">
            <span>Mini Talks</span>
            <ul>
                {miniTalkSections.map((section) => (
                    <li key={JSON.stringify(section)}>
                        <button
                            key={section}
                            type="button"
                            className={visible ? "minitalk__header active" : "minitalk__header"}
                            onClick={handleClick}
                        >{section.label}
                            <span className="arrow">
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </span>
                        </button>
                        <div>
                            <Collapse isOpened={visible}>
                                {section.miniTalks.map((c) =>
                                    c.none ? (
                                        <a 
                                            key={c}
                                            id="none"
                                            href={`${deriveIndex(post)}${section.name}/${c.href}`}
                                        >
                                            {c.label}
                                        </a>
                                    ) : (
                                        <a
                                            key={c}
                                            href={`${deriveIndex(post)}${section.name}/${c.href}`}
                                        >
                                            {c.label}
                                        </a>
                                    ))}
                            </Collapse>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MiniTalks;
