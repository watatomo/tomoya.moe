import Image from "next/image";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../../../public/img/home_icon.png";

export function Container01() {
    return (
        <div className="container01">
            <div className="icon">
                <div>
                    <div className="wrapper">
                        <Image
                            src={Icon}
                            quality="100"
                            objectFit="fill"
                            alt="icon"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="text">
                <div className="section01">
                    <span className="jp-text highlight">
                        普通で真面目が取り柄
                    </span>
                    <hr />
                    <h1>
                        <span className="highlight">ren.</span> 19.
                    </h1>
                    <h2>se asian. he/him.</h2>
                    <div className="home__links">
                        <a href="https://twitter.com/riamuyumemi">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://github.com/watatomo">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="mailto:ren@tomoya.moe">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://retrospring.net/tomoya">
                            <FontAwesomeIcon icon={faComments} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
