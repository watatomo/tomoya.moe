import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { FaFlower, FaSunBright, FaLeafMaple } from "../../svgicon";
import styles from "./Season.module.scss";

function Season({ s }) {
    return (
        <div className={styles.unit} s={s}>
            {"Winter" === s ? <FontAwesomeIcon icon={faSnowflake} /> : null}
            {"Spring" === s ? <FaFlower /> : null}
            {"Summer" === s ? <FaSunBright /> : null}
            {"Fall" === s || "Autumn" === s ? <FaLeafMaple /> : null}
            <p>
                <span>
                    <b>Season:</b> {s}
                </span>
            </p>
        </div>
    );
}

export default Season;
