import {
    faChevronLeft,
    faChevronRight,
    faStar,
    faFillDrip
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextSize } from "../../../svgicon";
import config from "../../../../mako.config";

function derivePreviousNextURL({ slug, tl, newSegment }) {
    const slugSegments = slug.split("/");
    slugSegments[slugSegments.length - 1] = newSegment;
    return `/${tl}/${slugSegments.join("/")}`;
}

function deriveIndexURL({ slug, tl }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `/${tl}/${slugSegments.join("/")}`;
}

function Toolbar({ post }) {
    const tl = config.translationsPath || "tl";
    const isStandaloneChapter = !post.previous && !post.next && !post.miniTalk;

    return (
        <div className="toolbar__wrapper">
            <div className="toolbar">
                <div className="toolbar__section">
                    {post.previous ? (
                        <a
                            href={derivePreviousNextURL({
                                slug: post.slug,
                                tl,
                                newSegment: post.previous
                            })}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </a>
                    ) : null}
                </div>

                <div className="toolbar__section">
                    <FontAwesomeIcon icon={faFillDrip} />
                </div>

                {!isStandaloneChapter && (
                    <div className="toolbar__section">
                        <a href={deriveIndexURL({ slug: post.slug, tl })}>
                            <FontAwesomeIcon icon={faStar} />
                        </a>
                    </div>
                )}

                <div className="toolbar__section">
                    <TextSize />
                </div>

                <div className="toolbar__section">
                    {post.next ? (
                        <a
                            href={derivePreviousNextURL({
                                slug: post.slug,
                                tl,
                                newSegment: post.next
                            })}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Toolbar;
