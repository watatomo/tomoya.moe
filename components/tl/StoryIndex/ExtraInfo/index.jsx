import { useState } from "react";
import Markdown from "markdown-to-jsx";
import { Collapse } from "react-collapse";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExtraInfo({ post }) {
    const {extra} = post;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    }

    return (
        <div className="extra">
            <button
                type="button"
                className={visible ? "collapsible-header active" : "collapsible-header"}
                onClick={handleClick}
            >
                <span>Extra Information</span>
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </span>
            </button>
            <Collapse isOpened={visible}>
                <div className="collapsible-body">
                    {extra.map((v) => (
                        <div className="item" key={v}>
                            <div className="label">
                                {v.label}
                            </div>
                            <div className="value">
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