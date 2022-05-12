import { ThermometerHalf } from "../../svgicon";
import styles from "./Season.module.scss";

function Season({ s }) {
    return (
        <div className={styles.season} s={s}>
            <ThermometerHalf />
            <p>
                <span>
                    <b>Season:</b> {s}
                </span>
            </p>
        </div>
    );
}

export default Season;
