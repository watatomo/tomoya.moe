/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Collapse from "@kunukn/react-collapse";
import cx from "classnames";
import HomeMeta from "../components/index/HomeMeta";
import StarBG from "../components/index/StarBG";
import { Container01 } from "../components/index/Container";

export default function Home() {
    const [isOpen, setIsOpen] = React.useState(false);
    const onToggle = () => setIsOpen(s => !s);
    const onChange = props => console.log(props);

    return (
        <>
            <HomeMeta />
            <div className="home__wrapper">
                <StarBG />
                <div className="home-content">
                    <div className="width-wrapper">
                        <Container01 />
                        <div className="home__nav">
                            <button type="button" className={cx("expand-more", {
                                "active": isOpen
                            })} onClick={onToggle} aria-hidden="true">
                                more?
                            </button>
                        </div>
                        <Collapse className={cx("container02", {
                            "active": isOpen
                        })} isOpen={isOpen} onChange={onChange}>
                            <div className="section02">
                                i'm not so sure what to put
                                here, but i can just be summed up
                                as just Some Guy.
                                tomowata runs in my blood and soul<p/>
                                drama clubP. riamuP. drastarsP. shinonome fan.
                                <br/>semi-casual priconne (global) player<p/>
                                this page is still a wip bc i have no ideas
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </>
    );
}
