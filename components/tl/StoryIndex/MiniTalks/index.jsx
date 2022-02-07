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
    const [visible, setVisible] = useState(
        post.miniTalkSections.map(() => false) // make array that just a bunch of falses with length the same as minitalk sections
    );

    const handleClick = (i) => {
        const newVisibleState = JSON.parse(JSON.stringify(visible)); // make a copy of visible
        newVisibleState[i] = !newVisibleState[i]; // flip value of ith item
        setVisible(newVisibleState); // set the new state
    };

    return (
        <div className="mini-talks">
            <span>Mini Talks</span>
            <ul>
                {miniTalkSections.map((section, i) => (
                    <li key={JSON.stringify(section)}>
                        <button
                            key={section}
                            type="button"
                            className={
                                visible[i]
                                    ? "minitalk__header active"
                                    : "minitalk__header"
                            }
                            onClick={() => handleClick(i)}
                        >
                            {section.label}
                            <span className="arrow">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </button>
                        <Collapse
                            isOpened={visible[i]}
                            theme={{
                                collapse: "collapse__wrapper",
                                content: "collapse-content"
                            }}
                        >
                            {section.miniTalks.map((c) =>
                                c.none ? (
                                    <a
                                        key={c}
                                        id="none"
                                        href={`${deriveIndex(post)}${
                                            section.name
                                        }/${c.href}`}
                                    >
                                        {c.label}
                                    </a>
                                ) : (
                                    <a
                                        key={c}
                                        href={`${deriveIndex(post)}${
                                            section.name
                                        }/${c.href}`}
                                    >
                                        {c.label}
                                    </a>
                                )
                            )}
                        </Collapse>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MiniTalks;
