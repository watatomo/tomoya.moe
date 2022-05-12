import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Location.module.scss";

function Location({ children }) {
    return (
        <div className={styles.location}>
            <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>
                    <b>Location:</b> {children}
                </span>
            </p>
        </div>
    );
}

export default Location;
