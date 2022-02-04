/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Collapse } from "react-collapse";
import HomeMeta from "../components/index/HomeMeta";
import StarBG from "../components/index/StarBG";
import { Container01 } from "../components/index/Container";

export default function Home() {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <>
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
                        <Collapse isOpened={visible}>
                            <div className="section02">
                                i'm not so sure what to put here, but i can just
                                be summed up as just Some Guy. tomowata runs in
                                my blood and soul
                                <p />
                                drama clubP. riamuP. drastarsP. shinonome fan.
                                <br />
                                semi-casual priconne (global) player
                                <p />
                                this page is still a wip bc i have no ideas
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </>
    );
}
