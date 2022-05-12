import Markdown from "markdown-to-jsx";
import Fn from "../../tl/Footnotes";

function Action({ children }) {
    return (
        <p className="noCase">
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

export default Action;
