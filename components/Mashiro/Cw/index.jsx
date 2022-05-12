import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Cw.module.scss";

function Cw({ children }) {
    return (
        <div className={styles.cw}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <span className={styles.cw__header}>
                <b>Content Warning</b>
            </span>
            <p>{children}</p>
        </div>
    );
}

export default Cw;
