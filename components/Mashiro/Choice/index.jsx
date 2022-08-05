import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./Choice.module.scss";

function Choice({ children, c }) {
    return (
        <div className={styles.unit} c={c || "green"}>
            <div className={styles.line}>
                <FontAwesomeIcon icon={faCaretRight} />
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, { singleTilde: false }]}
                >
                    {children}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default Choice;
