/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { useState } from "react";
import { Collapse } from "react-collapse";
import Link from "next/link";
import HomeMeta from "../components/index/HomeMeta";
import StarBG from "../components/index/StarBG";
import { Container01 } from "../components/index/Container";

const StyledWrapper = styled.article`
    .home__wrapper {
        position: relative;
        overflow: hidden;
        min-height: 100vh;
        min-width: 100vw;
        background: radial-gradient(ellipse at bottom, #21294c 0%, #090a0f 100%)
            no-repeat;
        font-family: "Quicksand", "M PLUS Rounded 1c", sans-serif;
        color: #f1f3f7;
    }
    .home__wrapper .width-wrapper {
        display: flex;
        flex-direction: column;
        width: 30rem;
        gap: 0.8em;
    }
    .home__wrapper .jp-text {
        font-weight: 500;
        font-family: "M PLUS Rounded 1c";
    }
    .home__wrapper .highlight {
        color: #f2dea8;
    }
    .home__wrapper .home-content {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100vh;
        min-width: 100vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .home__wrapper .container01 {
        display: flex;
        transition: all 0.2s linear;
        align-items: center;
        justify-content: center;
        gap: 1.5625em;
    }
    .home__wrapper .container01 hr {
        border: 1px solid #f1f3f7;
    }
    .home__wrapper .container01 .icon {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .home__wrapper .container01 .icon > div {
        display: block;
        width: 7.8125em;
        height: 7.8125em;
        border-radius: 50%;
        border: 1px solid #f1f3f7;
        padding: 0.5em;
        transition: all 0.2s linear;
    }
    .home__wrapper .container01 .icon > div .wrapper {
        display: block;
        position: relative;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .home__wrapper .container01 .icon > div .wrapper::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        width: 7.8125em;
        height: 7.8125em;
        background: rgba(39, 30, 114, 0.15);
        transition: background-color 0.2s linear;
    }
    .home__wrapper .container01 .icon > div .wrapper:hover::after {
        background: none;
    }
    .home__wrapper .container01 .icon > div .wrapper img {
        transition: all 0.2s linear;
        height: auto;
        filter: saturate(75%);
    }
    .home__wrapper .container01 .icon > div .wrapper img:hover {
        filter: saturate(100%);
    }
    .home__wrapper .container01 .text {
        flex-grow: 1;
    }
    .home__wrapper .container01 .text .section01 h1 {
        font-size: 1.7em;
        font-weight: bold;
        margin: 0;
    }
    .home__wrapper .container01 .text .section01 h2 {
        font-size: 1.5em;
        font-weight: normal;
        margin: 0 0 0.4em;
    }
    .home__wrapper .home__links {
        display: flex;
        align-items: center;
        gap: 0.8em;
    }
    .home__wrapper .home__links a {
        display: inline-block;
        color: #fff;
        transition: all 0.15s linear;
    }
    .home__wrapper .home__links a:hover {
        color: #f2dea8;
    }
    .home__wrapper .home__links .svg-inline--fa {
        vertical-align: -0.125em;
    }
    .home__wrapper .home__links svg.svg-inline--fa {
        display: block;
        font-size: 1.75em;
        width: 1em;
        margin: 0;
    }
    .home__wrapper .home__nav {
        display: flex;
        justify-content: flex-end;
        gap: 1em;
        font-size: 1em;
    }
    .home__wrapper .home__nav button {
        position: relative;
        background: unset;
        border: unset;
        padding: 0.5px;
        cursor: pointer;
        color: #f1f3f7;
        text-decoration: none;
        line-height: 1.35;
    }
    .home__wrapper .home__nav button:hover {
        color: #fff;
    }
    .home__wrapper .home__nav button:hover::before {
        transform: scaleX(1);
    }
    .home__wrapper .home__nav button::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        transform: scaleX(0);
        transition: transform 0.2s ease;
    }
    .home__wrapper .section02 a {
        color: inherit;
    }

    @media (max-width: 500px) {
        .home__wrapper {
            font-size: 12px;
        }
        .home__wrapper .width-wrapper {
            width: 83%;
        }
        .home__wrapper .container01 .icon > div {
            width: 7.4em;
            height: 7.4em;
        }
        .home__wrapper .container01 .icon > div .wrapper::after {
            width: 7.4em;
            height: 7.4em;
        }
    }

    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        .home__wrapper .width-wrapper > * + * {
            margin: 0.8em 0;
        }

        .home__wrapper .container01 > * + * {
            margin: 0 1.5625em;
        }

        .home__wrapper .home__links > * + * {
            margin: 0 0.8em;
        }
    }
`;

export default function Home() {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <StyledWrapper>
            <HomeMeta />
            <div className="home__wrapper">
                <StarBG />
                <div className="home-content">
                    <div className="width-wrapper">
                        <Container01 />
                        <div className="home__nav">
                            <button
                                type="button"
                                className={
                                    visible
                                        ? "expand-more active"
                                        : "expand-more"
                                }
                                onClick={handleClick}
                            >
                                more?
                            </button>
                        </div>
                        <Collapse
                            isOpened={visible}
                            theme={{
                                collapse: "collapse__wrapper",
                                content: "collapse-content"
                            }}
                        >
                            <div className="section02">
                                i'm not so sure what to put here, but i can just
                                be summed up as just{" "}
                                <Link href="https://ensemble-stars.jp/characters/mashiro_tomoya/">
                                    Some Guy
                                </Link>
                                . tomowata runs in my blood and soul
                                <p />
                                tomoya, wataru, hokuto (enst); ena, akito
                                (prsk); riamu, akari, akira (imas cg); kaoru,
                                teru, tsubasa (imas sm); anna, matsuri (imas
                                ml); nichika (imas sc); shizuku (ll nijigaku);
                                sumire (ll superstar); hikari, karen (revstar);
                                agnes tachyon, manhattan cafe (umamusu); saori,
                                rika (d4dj); aoi (priconne)
                                <p />
                                this page is still a wip bc i have no ideas. you
                                can find my translations{" "}
                                <Link href="/tl">here</Link>.
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}
