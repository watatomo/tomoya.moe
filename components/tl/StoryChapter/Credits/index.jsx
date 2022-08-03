import Markdown from "markdown-to-jsx";
import styles from "./Credits.module.scss";

function Credits({ tl, tlc, qc }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {tl ? (
                    <div className={styles.tl}>
                        <span className={styles.label}>
                            <b>Translation</b>
                        </span>
                        <Markdown
                            options={{
                                forceWrapper: true
                            }}
                        >
                            {tl}
                        </Markdown>
                    </div>
                ) : null}

                {tlc ? (
                    <div className={styles.tlc}>
                        <span className={styles.label}>
                            <b>Translation Check</b>
                        </span>
                        <Markdown
                            options={{
                                forceWrapper: true
                            }}
                        >
                            {tlc}
                        </Markdown>
                    </div>
                ) : null}

                {qc ? (
                    <div className={styles.qc}>
                        <span className={styles.label}>
                            <b>Quality Check</b>
                        </span>
                        <Markdown
                            options={{
                                forceWrapper: true
                            }}
                        >
                            {qc}
                        </Markdown>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Credits;
