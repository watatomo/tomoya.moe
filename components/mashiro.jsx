/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import {
    faMapMarkerAlt,
    faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Markdown from "markdown-to-jsx";
import { ThermometerHalf } from "./svgicon";
import Fn from "./tl/Footnotes";

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
    return (
        <Markdown
            options={{
                overrides: {
                    Fn: {
                        component: Fn
                    }
                }
            }}
        >
            <p className="thought">{children}</p>
        </Markdown>
    );
}

export function Season({ s }) {
    return (
        <div className="msr-season" s={s}>
            <ThermometerHalf />
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
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>
                    <b>Location:</b> {children}
                </span>
            </p>
        </div>
    );
}

export function Narration({ children }) {
    return (
        <div className="msr-narration">
            <div className="msr-line">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, { singleTilde: false }]}
                >
                    {children}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export function Cw({ children }) {
    return (
        <div className="msr-cw">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <span className="cw-header">Content Warning</span>
            <p>{children}</p>
        </div>
    );
}
