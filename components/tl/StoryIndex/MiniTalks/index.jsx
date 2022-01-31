/* eslint-disable no-nested-ternary */
import React from "react";
// import Collapse from "@kunukn/react-collapse";
// import cx from "classnames";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function deriveIndex({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `/tl/${slugSegments.join("/")}/mini_talk/`;
}

function MiniTalks({ post }) {
    const { miniTalkSections } = post;
    // const [isOpen, setIsOpen] = React.useState(false);
    // const onToggle = () => setIsOpen(s => !s);
    // const onChange = props => console.log(props);

    return (
        <div className="mini-talks">
            <span>Mini Talks</span>
            <ul>
                {miniTalkSections.map((section) => (
                    <li key={JSON.stringify(section)}>
                        {section.miniTalks.map((c) =>
                            c.href ? (
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
                                )
                            ) : (
                                <span key={c}>{c.label}</span>
                                
                            )
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MiniTalks;
