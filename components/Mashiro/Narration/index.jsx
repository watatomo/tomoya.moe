import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./Narration.module.scss";
import styles2 from "../Bubble/Bubble.module.scss";

function Narration({ children }) {
    return (
        <div className={styles.narration}>
            <div className={styles2.line}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, { singleTilde: false }]}
                >
                    {children}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default Narration;
