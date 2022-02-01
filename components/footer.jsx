import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__links">
                    <a href="https://twitter.com/riamuyumemi">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://github.com/watatomo">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="mailto:ren@tomoya.moe">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
        </footer>
    );
}