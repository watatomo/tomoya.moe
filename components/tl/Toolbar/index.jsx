import {
    faChevronLeft,
    faChevronRight,
    faCrown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Toolbar() {
    return (
        <div className="toolbar__wrapper">
            <div className="toolbar">
                <div className="toolbar__section">
                    <a href="previous">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </a>
                </div>
                <div className="toolbar__section">color</div>
                <div className="toolbar__section">
                    <a href="home">
                        <FontAwesomeIcon icon={faCrown} />
                    </a>
                </div>
                <div className="toolbar__section">text</div>
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
