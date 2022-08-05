import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Cw.module.scss";

function Cw({ children }) {
    return (
        <div className={styles.unit}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <span className={styles.header}>
                <b>Content Warning</b>
            </span>
            <p>{children}</p>
        </div>
    );
}

export default Cw;
