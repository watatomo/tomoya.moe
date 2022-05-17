// import React, {} from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
    height: 40px;
    background-color: var(--chapter-inner-bg-color);
    transition: var(--msr-transition);
    box-shadow: 0 0 12px 0px var(--header-shadow-color);
    position: fixed;
    width: 100%;
    z-index: 364;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    gap: 1em;
    align-items: center;
    font-family: "Inter var", "M PLUS Rounded 1c", sans-serif;
    justify-content: space-between;
    color: var(--msr-text-color);
    padding: 0 0.9em;

    .site-name {
        font-weight: 700;
        color: var(--msr-text-color);
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .header-toolbar {
        flex: 1;
        max-width: 400px;
        justify-self: center;
    }

    .mode-toggle {
        justify-self: flex-end;

        button {
            position: relative;
            background: unset;
            border: unset;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            top: 2px;
        }

        svg {
            width: 1.5em;
            height: 1.5em;
        }
    }

    /* @media only screen and (max-width: 500px) {
        .site-name {
            font-size: 14px;
        }
    } */
`;

const HeaderSpacing = styled.div`
    height: 40px;
`;

// i used styled components for this so we dont have to make css class names 20338420934 chars long

function Header({ toolbar }) {
    const [mounted, setMounted] = useState(false);
    const { setTheme, theme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <StyledHeader>
                <Link href="/tl">
                    <a className="site-name">tomoya.moe</a>
                </Link>
                <div className="header-toolbar">{toolbar}</div>
                <div className="mode-toggle">
                    <button onClick={toggleTheme}>
                        {resolvedTheme === "dark" ? (
                            <FontAwesomeIcon icon={faMoon} />
                        ) : (
                            <FontAwesomeIcon icon={faSun} />
                        )}
                    </button>
                </div>
            </StyledHeader>
            <HeaderSpacing />
        </>
    );
}

export default Header;
