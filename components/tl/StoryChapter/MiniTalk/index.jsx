/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Markdown from "markdown-to-jsx";
import { Collapse } from "react-collapse";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Thought from "../../../Mashiro/Thought";
import Bubble from "../../../Mashiro/Bubble";
import { Fn } from "../../Footnotes";
import styles from "./MiniTalk.module.scss";

export function MiniTalk({ speaker, response, children }) {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };
    return (
        <div className={styles.option} character={speaker}>
            <button
                type="button"
                className={
                    styles.option__header + (visible ? ` ${styles.active}` : "")
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
                            },
                            Bubble: {
                                component: Bubble
                            }
                        }
                    }}
                >
                    {response}
                </Markdown>
                <span className={styles.arrow}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </button>
            <Collapse
                isOpened={visible}
                theme={{
                    collapse: `${styles.collapse__wrapper}`,
                    content: `${styles.collapse__content}`
                }}
            >
                <div className={styles.option__body}>{children}</div>
            </Collapse>
        </div>
    );
}

export function MiniTalkType({ r, name, part }) {
    return (
        <h2 className={styles.header}>
            <span mt={r} />
            {name} ({part})
        </h2>
    );
}

export function Possibility({ normal, rare }) {
    return (
        <Tabs
            className={styles.tabs}
            disabledTabClassName={styles.disabled}
            selectedTabClassName={styles.selected}
            selectedTabPanelClassName={styles.selected}
        >
            <TabList className={styles.tabs__list}>
                <Tab className={styles.tabs__tab}>Normal</Tab>
                <Tab className={styles.tabs__tab}>Rare</Tab>
            </TabList>
            <TabPanel className={styles.tabs__panel}>{normal}</TabPanel>
            <TabPanel className={styles.tabs__panel}>{rare}</TabPanel>
        </Tabs>
    );
}

export function Mt({ children }) {
    return <div className={styles.wrapper}>{children}</div>;
}
