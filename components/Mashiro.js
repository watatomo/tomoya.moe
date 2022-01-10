import React, { useState, useEffect } from "react";
import styled from "styled-components";
import markdownToHtml from "../lib/markdownToHtml";

export function Bubble({ children, character }) {
    return (
        <div className="msr-unit" character={character}>
            <div className="msr-icon">
                <div className="msr-icon__wrapper">
                    <div className="msr-icon__base"></div>
                </div>
            </div>

            <div className="msr-line">
                <div className="msr-name"></div>
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
            ></span>
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
        <div class="msr-narration">
            <div class="msr-line">
                <p dangerouslySetInnerHTML={{ __html: narration }}></p>
            </div>
        </div>
    );
}

export function Cw({ children }) {
    return (
        <div class="msr-cw">
            <span class="cw-header">Content Warning</span>
            {children}
        </div>
    );
}
