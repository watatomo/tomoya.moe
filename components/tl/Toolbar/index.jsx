import {
    faChevronLeft,
    faChevronRight,
    faCrown,
    faFillDrip
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextSize } from "../../svgicon";

function Toolbar() {
    return (
        <div className="toolbar__wrapper">
            <div className="toolbar">
                <div className="toolbar__section">
                    <a href="previous">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </a>
                </div>
                <div className="toolbar__section">
                    <FontAwesomeIcon icon={faFillDrip} />
                </div>
                <div className="toolbar__section">
                    <a href="home">
                        <FontAwesomeIcon icon={faCrown} />
                    </a>
                </div>
                <div className="toolbar__section">
                    <TextSize />
                </div>
                <div className="toolbar__section">
                    <a href="next">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;
