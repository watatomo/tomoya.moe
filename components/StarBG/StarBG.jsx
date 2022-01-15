import styles from "./StarBG.module.scss";

export function StarBG() {
    return (
        <div className={styles["star-bg"]}>
            <div className={styles["stars1"]} />
            <div className={styles["stars2"]} />
            <div className={styles["stars3"]} />
        </div>
    );
}

export default StarBG;
