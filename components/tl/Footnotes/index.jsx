import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styles from "./Footnotes.module.scss";

function Fn({ num, children }) {
    return (
        <Tippy
            content={children}
            interactive
            theme="translucent"
            animation="shift-away"
            arrow={false}
            offset={[0, 5]}
            placement="top"
            appendTo={() => document.body}
        >
            <span className={styles.tooltip} id={`fnref:${num}`}>
                {num}
            </span>
        </Tippy>
    );
}

export default Fn;
