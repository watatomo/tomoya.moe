// import React, {} from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
    height: var(--header-height);
    background: var(--background-tertiary);
    box-shadow: 0 0 12px 0 rgba(var(--shadow-color), 0.35);
    position: fixed;
    width: 100%;
    z-index: 364;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    grid-gap: 1em;
    gap: 1em;
    align-items: center;
    font-family: "Inter var", "M PLUS Rounded 1c", sans-serif;
    justify-content: space-between;
    color: var(--text-tertiary);
    padding: 0 0.9em;

    .site-name {
        font-weight: 700;
        color: var(--text-tertiary);
        text-decoration: none;
    }

    .header-toolbar {
        flex: 1;
        max-width: 400px;
        justify-self: center;
    }

    .mode-toggle {
        justify-self: flex-end;
        display: grid;
        justify-content: center;
        align-items: center;
        justify-items: center;

        button {
            position: relative;
            background: unset;
            border: unset;
            text-decoration: none;
            color: inherit;
            bottom: 1px;
            font-size: 0;
        }

        svg {
            width: 22px !important;
            height: 22px !important;
            cursor: pointer;

            &:hover {
                color: var(--text-primary);
            }
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
                <span>
                    <Link href="/tl">
                        <a className="site-name">tomoya.moe</a>
                    </Link>
                </span>
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
