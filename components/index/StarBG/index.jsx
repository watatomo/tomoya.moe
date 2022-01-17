import styles from "./StarBG.module.scss";

function StarBG() {
    return (
        <div className={styles.starry}>
            <div className={styles.stars1} />
            <div className={styles.stars2} />
            <div className={styles.stars3} />
        </div>
    );
}

export default StarBG;
