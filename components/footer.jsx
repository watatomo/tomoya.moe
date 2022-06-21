import styled from "styled-components";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFooter = styled.footer`
    height: var(--footer-height);
    display: flex;
    justify-content: flex-end;
    padding: 4px 16px;
    background: var(--footer-bg);

    .links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        // gap: 10px;
        > * + * {
            margin-left: 10px;
        }

        svg {
            width: 16px;
            height: 16px;
        }

        a {
            display: inline-block;
            color: var(--text-primary);

            &:hover {
                color: inherit;
            }
        }
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <div className="links">
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
        </StyledFooter>
    );
}
