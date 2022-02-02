/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Markdown from "markdown-to-jsx";
import { Collapse } from "react-collapse";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bubble, Thought } from "../../../mashiro";
import Fn from "../../Footnotes";

export function MiniTalk({ speaker, replier, response, children }) {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    }
    
    return (
        <div className="minitalk-option" character={speaker}>
            <button
                type="button"
                className={visible ? "minitalk-option__header active" : "minitalk-option__header"}
                onClick={handleClick}
            >
                <Markdown
                    options={{
                        forceInline: true,
                        overrides: {
                            Fn: {
                                component: Fn
                            },
                            Thought: {
                                component: Thought
                            }
                        }
                    }}
                >{response}</Markdown>
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </span>
            </button>
            <Collapse isOpened={visible}>
                <div className="minitalk-option__body">
                    <Bubble character={replier} children={children} />
                </div>
            </Collapse>
        </div>
    );
}
