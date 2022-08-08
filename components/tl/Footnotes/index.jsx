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
    color: var(--text-primary);
`;

const Wrapper = styled.div`
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: var(--text-secondary);
        border-bottom: solid 1px var(--msr-line-color);
        padding: 0 0 0.15em;
        margin: 0 0 0.6em 0;
    }

    p {
        margin: 0 0 0.75em 0;

        &:last-child {
            margin: 0;
        }
    }
`;

export function Fn({ num, children }) {
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

export function Tln({ children }) {
    return (
        <>
            <hr id="tln"></hr>
            {/* <h2>Translator's Notes</h2> */}
            <Wrapper>{children}</Wrapper>
        </>
    );
}
