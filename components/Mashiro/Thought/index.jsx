import Markdown from "markdown-to-jsx";
import Fn from "../../tl/Footnotes";
import styles from "./Thought.module.scss";

function Thought({ children }) {
    return (
        <p className={styles.thought}>
            <Markdown
                options={{
                    forceInline: true,
                    overrides: {
                        Fn: {
                            component: Fn
                        }
                    }
                }}
            >
                {children}
            </Markdown>
        </p>
    );
}

export default Thought;
