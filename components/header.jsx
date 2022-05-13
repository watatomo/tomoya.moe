// import React, {} from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHeader = styled.header`
    height: 40px;
    background-color: var(--chapter-inner-bg-color);
    transition: background-color var(--msr-transition);
    box-shadow: 0 0 12px 0px var(--header-shadow-color);
    position: fixed;
    width: 100%;
    z-index: 364;
    display: flex;
    align-items: center;
    padding: 0 0 0 0.9em;
    font-family: "Inter var", "M PLUS Rounded 1c", sans-serif;
    justify-content: space-between;
    color: var(--msr-text-color);

    .site-name {
        font-weight: 700;
    }

    .header-toolbar {
        flex: 1 1 200px;
        max-width: 400px;
        justify-self: end;
    }

    .mode-toggle {
        margin-right: 2em;

        button {
            position: relative;
            background: unset;
            border: unset;
            cursor: pointer;
            text-decoration: none;
            font-size: 1.3em;
            color: inherit;
        }
    }
`;

const HeaderSpacing = styled.div`
    height: 40px;
`;

// i used styled components for this so we dont have to make css class names 20338420934 chars long

function Header({ toolbar }) {
    const [mounted, setMounted] = useState(false);
    const { setTheme, theme } = useTheme();

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
                <span className="site-name">tomoya.moe</span>
                <div className="header-toolbar">{toolbar}</div>
                <div className="mode-toggle">
                    <button onClick={toggleTheme}>
                        {theme === "dark" ? (
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
