/* eslint-disable no-unused-vars */
// import { CSSTransition } from "react-transition-group";
import Markdown from "markdown-to-jsx";
import { Thought } from "../../../mashiro";
import Fn from "../../Footnotes";

export function MiniTalk({ character, children }) {
    return (
        <div className="minitalk" character={character}>
            <Markdown
                options={{
                    forceInline: true,
                    overrides: {
                        Fn: {
                            component: Fn
                        },
                        Thought: {
                            component: Thought
                        },
                        Option: {
                            component: Option
                        }
                    }
                }}
            >
                {children}
            </Markdown>
        </div>
    );
}

export function Option({ children, option, character }) {
    return (
        <div className="minitalk-option">
            <div className="minitalk-option__header">
            <Markdown
                options={{
                    forceInline: true,
                    overrides: {
                        Fn: {
                            component: Fn
                        },
                        Thought: {
                            component: Thought
                        },
                        Option: {
                            component: Option
                        }
                    }
                }}
            >
                {option}
            </Markdown>
            </div>
            <div className="msr-unit" character={character}>
            <div className="msr-icon">
                <div className="msr-icon__wrapper">
                    <div className="msr-icon__base" />
                </div>
            </div>
            <div className="msr-line">
                <div className="msr-name" />
                <Markdown
                options={{
                    forceInline: true,
                    overrides: {
                        Fn: {
                            component: Fn
                        },
                        Thought: {
                            component: Thought
                        },
                        Option: {
                            component: Option
                        }
                    }
                }}
            >
                {children}
            </Markdown>
                </div>
            </div>
        </div>
    )
}