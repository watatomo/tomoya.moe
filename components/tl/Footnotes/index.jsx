import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styled from "styled-components";

const Button = styled.button`
    cursor: help;
    vertical-align: middle;
    text-decoration: none;
    margin: 0 2px;
    font-weight: 800;
    font-style: normal;
    font-size: 0.55em;
    border-radius: 3px;
    border: solid 1px var(--tooltip-border);
    padding: 0 3px;
    background: var(--tooltip-bg);
    color: var(--msr-text-color);

    &:hover {
        color: var(--storycolor-dark);
    }
`;

function Fn({ num, children }) {
    return (
        <Tippy
            content={children}
            interactive
            theme="translucent"
            animation="shift-away"
            arrow={false}
            offset={[0, 5]}
            placement="top"
            appendTo={() => document.body}
        >
            <Button id={`fnref:${num}`}>{num}</Button>
        </Tippy>
    );
}

export default Fn;
