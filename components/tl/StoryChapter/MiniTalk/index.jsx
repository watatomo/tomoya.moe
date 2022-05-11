/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Markdown from "markdown-to-jsx";
import { Collapse } from "react-collapse";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Thought } from "../../../mashiro";
import Fn from "../../Footnotes";

export function MiniTalk({ speaker, response, children }) {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className="minitalk-option" character={speaker}>
            <button
                type="button"
                className={
                    visible
                        ? "minitalk-option__header active"
                        : "minitalk-option__header"
                }
                onClick={handleClick}
            >
                <Markdown
                    options={{
                        forceInline: true,
                        overrides: {
                            Fn: {
                                component: Fn
                            },
                            Thought: {
                                component: Thought
                            }
                        }
                    }}
                >
                    {response}
                </Markdown>
                <span className="arrow">
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </button>
            <Collapse
                isOpened={visible}
                theme={{
                    collapse: "collapse__wrapper",
                    content: "collapse-content"
                }}
            >
                <div className="minitalk-option__body">{children}</div>
            </Collapse>
        </div>
    );
}

export function MiniTalkType({ r, name, part }) {
    return (
        <h2 className="minitalk-header">
            <span mt={r} />
            {name} ({part})
        </h2>
    );
}

export function Possibility({ normal, rare }) {
    return (
        <Tabs
            className="minitalk-tabs"
            disabledTabClassName="disabled"
            selectedTabClassName="selected"
            selectedTabPanelClassName="selected"
        >
            <TabList className="minitalk-tabs__list">
                <Tab className="minitalk-tabs__tab">Normal</Tab>
                <Tab className="minitalk-tabs__tab">Rare</Tab>
            </TabList>
            <TabPanel className="minitalk-tabs__panel">{normal}</TabPanel>
            <TabPanel className="minitalk-tabs__panel">{rare}</TabPanel>
        </Tabs>
    );
}
