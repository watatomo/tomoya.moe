// import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
// import "tippy.js/themes/translucent.css";
// import { compiler } from "markdown-to-jsx";
// import ReactMarkdown  from "react-markdown";

/* const StyledWrapper = styled.span`
    .tippy-box[data-animation="shift-away"][data-state="hidden"] {
        opacity: 0;

        &[data-placement^="top"] {
            transform: translateY(7px);
        }

        &[data-placement^="bottom"] {
            transform: translateY(-7px);
        }

        &[data-placement^="left"] {
            transform: translateX(7px);
        }

        &[data-placement^="right"] {
            transform: translateX(-7px);
        }
    }

    .tippy-box[data-theme~="translucent"] {
        background-color: var(--msr-tippy-bg);
        font-size: 0.85em;

        a {
            color: var(--storyColor-bright);
            border-bottom: 0;
            text-decoration: underline;

            &:hover {
                color: var(--storyColor);
            }
        }

        > .tippy-arrow {
            width: 14px;
            height: 14px;
        }

        &[data-placement^="top"] > .tippy-arrow:before {
            border-width: 7px 7px 0;
            border-top-color: var(--msr-tippy-bg);
        }

        &[data-placement^="bottom"] > .tippy-arrow:before {
            border-width: 0 7px 7px;
            border-bottom-color: var(--msr-tippy-bg);
        }

        &[data-placement^="left"] > .tippy-arrow:before {
            border-width: 7px 0 7px 7px;
            border-left-color: var(--msr-tippy-bg);
        }

        &[data-placement^="right"] > .tippy-arrow:before {
            border-width: 7px 7px 7px 0;
            border-right-color: var(--msr-tippy-bg);
        }

        > {
            .tippy-backdrop {
                background-color: var(--msr-tippy-bg);
            }

            .tippy-svg-arrow {
                fill: var(--msr-tippy-bg);
            }
        }
    }
`; */

function Fn({ num, children }) {
    // const parsedNote = compiler(`${children}`, { wrapper: null });
    // const parsedNote = <ReactMarkdown>{children}</ReactMarkdown>;

    return (
        // <StyledWrapper>
        <Tippy
            // content={parsedNote}
            content={children}
            interactive
            theme="translucent"
            animation="shift-away"
            arrow={false}
            offset={[0, 5]}
            placement="top"
            appendTo={() => document.body}
            /* popperOptions={{
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            allowedAutoPlacements: "top"
                        }
                    }
                ]
            }} */
        >
            <span className="tooltip" id={`fnref:${num}`}>
                {num}
            </span>
        </Tippy>
        // </StyledWrapper>
    );
}

export default Fn;
