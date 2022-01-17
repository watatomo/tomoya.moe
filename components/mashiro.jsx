import React, { useState, useEffect } from "react";
// import styles from "../styles/mashiro.module.scss";
import markdownToHtml from "../lib/markdownToHtml";

export function Bubble({ children, character }) {
    return (
        <div className="msr-unit" character={character}>
            <div className="msr-icon">
                <div className="msr-icon__wrapper">
                    <div className="msr-icon__base" />
                </div>
            </div>

            <div className="msr-line">
                <div className="msr-name" />
                {children}
            </div>
        </div>
    );
}

export function BubbleHidden({ children, character }) {
    return (
        <div className="msr-unit hidden" character={character}>
            <div className="msr-icon">
                <div className="msr-icon__wrapper">
                    <div className="msr-icon__base" />
                </div>
            </div>

            <div className="msr-line">
                <div className="msr-name" />
                {children}
            </div>
        </div>
    );
}

export function BubbleUnknown({ children, character }) {
    return (
        <div className="msr-unit unknown" character={character}>
            <div className="msr-icon">
                <div className="msr-icon__wrapper">
                    <div className="msr-icon__base" />
                </div>
            </div>

            <div className="msr-line">
                <div className="msr-name" />
                {children}
            </div>
        </div>
    );
}

export function Thought({ children }) {
    const [thought, setThought] = useState("");
    useEffect(() => {
        // console.log(children);
        markdownToHtml(children || "").then((response) => {
            setThought(response.slice(3, -5));
            // console.log(response);
        });
    });
    return (
        <p>
            <span
                className="thought"
                dangerouslySetInnerHTML={{ __html: thought }}
            />
        </p>
    );
}

export function Season({ s }) {
    return (
        <div className="msr-season" s={s}>
            <p>
                <span>
                    <b>Season:</b> {s}
                </span>
            </p>
        </div>
    );
}

export function Location({ children }) {
    return (
        <div className="msr-location">
            <p>
                <span>
                    <b>Location:</b> {children}
                </span>
            </p>
        </div>
    );
}

export function Narration({ children }) {
    const [narration, setNarration] = useState("");
    useEffect(() => {
        // console.log(children);
        markdownToHtml(children || "").then((response) => {
            setNarration(response.slice(3, -5));
            // console.log(response);
        });
    });
    return (
        <div className="msr-narration">
            <div className="msr-line">
                <p dangerouslySetInnerHTML={{ __html: narration }} />
            </div>
        </div>
    );
}

export function Cw({ children }) {
    return (
        <div className="msr-cw">
            <span className="cw-header">Content Warning</span>
            {children}
        </div>
    );
}
