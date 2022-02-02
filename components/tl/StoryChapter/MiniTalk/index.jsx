/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
// import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Markdown from "markdown-to-jsx";
import { Collapse } from "react-collapse";
import { Bubble, Thought } from "../../../mashiro";
import Fn from "../../Footnotes";

export function MiniTalk({ speaker, replier, response, children }) {
    const [visible, setVisible] = useState(false);

    function handleClick() {
        setVisible(!visible);
    }
    return (
        <div className="minitalk-option" character={speaker}>
            <button
                type="button"
                className="minitalk-option__header"
                onClick={handleClick}
            >
                {response}
            </button>
            <Collapse isOpened={visible}>
                <div className="minitalk-option__body">
                    <Bubble character={replier} children={children} />
                </div>
            </Collapse>
        </div>
    );
}
