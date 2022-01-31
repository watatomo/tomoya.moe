import React from "react";
import Markdown from "markdown-to-jsx";
import Collapse from "@kunukn/react-collapse";
import cx from "classnames";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExtraInfo({ post }) {
    const {extra} = post;
    const [isOpen, setIsOpen] = React.useState(false);
    const onToggle = () => setIsOpen(s => !s);
    const onChange = props => console.log(props);

    return (
        <div className="extra">
            <div className={cx("collapsible-header", {
                "active": isOpen
            })} onClick={onToggle} aria-hidden="true">
                <span>Extra Information</span>
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </span>
            </div>
            <Collapse className={cx("collapsible-body", {
                "active": isOpen
            })} isOpen={isOpen} onChange={onChange}>
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
            </Collapse>
        </div>
    );
}

export default ExtraInfo;