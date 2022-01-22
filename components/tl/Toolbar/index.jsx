import {
    faChevronLeft,
    faChevronRight,
    faStar,
    faFillDrip
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextSize } from "../../svgicon";
import config from "../../../mako.config";

function Toolbar({ post }) {
    const tl = config.translationsPath || "tl";
    return (
        <div className="toolbar__wrapper">
            <div className="toolbar">
                {post.previous ? (
                    <div className="toolbar__section">
                        <a href={`/${tl}/${post.story}/${post.previous}`}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </a>
                    </div>
                ) : (
                    <div className="toolbar__section" />
                )}

                <div className="toolbar__section">
                    <FontAwesomeIcon icon={faFillDrip} />
                </div>

                {post.story ? (
                    <div className="toolbar__section">
                        <a href={`/${tl}/${post.story}`}>
                            <FontAwesomeIcon icon={faStar} />
                        </a>
                    </div>
                ) : null}

                <div className="toolbar__section">
                    <TextSize />
                </div>

                {post.next ? (
                    <div className="toolbar__section">
                        <a href={`/${tl}/${post.story}/${post.next}`}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                    </div>
                ) : (
                    <div className="toolbar__section" />
                )}
            </div>
        </div>
    );
}

export default Toolbar;
