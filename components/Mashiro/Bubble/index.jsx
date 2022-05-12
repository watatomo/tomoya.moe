import styles from "./Bubble.module.scss";

function Bubble({ children, character, name, attribute }) {
    return (
        <div
            className={styles.unit}
            character={character}
            attribute={attribute || null}
        >
            <div className={styles.icon}>
                <div className={styles.icon__wrapper}>
                    <div className={styles.icon__base} />
                </div>
            </div>
            <div className={styles.line}>
                <div className={styles.name}>
                    <b>{name || character}</b>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Bubble;
