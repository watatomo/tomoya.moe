// import React, {} from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const StyledHeader = styled.header`
    height: 40px;
    background: var(--chapter-inner-bg-color);
    box-shadow: 0 0 12px 0px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    z-index: 364;
    display: flex;
    align-items: center;
    padding: 0 0 0 0.9em;
    font-family: "Inter var", "M PLUS Rounded 1c", sans-serif;
    justify-content: space-between;

    .site-name {
        font-weight: 700;
    }

    .header-toolbar {
        flex: 1 1 200px;
        max-width: 400px;
        justify-self: end;
    }
`;

const HeaderSpacing = styled.div`
    height: 40px;
`;

// i used styled components for this so we dont have to make css class names 20338420934 chars long

function Header({ toolbar }) {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <StyledHeader>
                <span className="site-name">tomoya.moe</span>
                <div className="header-toolbar">{toolbar}</div>
                <div className="mode-toggle">
                    <DarkModeSwitch
                        style={{ marginRight: "2rem" }}
                        checked={mounted}
                        onChange={() =>
                            setTheme(
                                resolvedTheme === "light" ? "dark" : "light"
                            )
                        }
                        size={120}
                    />
                </div>
            </StyledHeader>
            <HeaderSpacing />
        </>
    );
}
export default Header;
