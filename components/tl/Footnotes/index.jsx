import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
// import "tippy.js/themes/translucent.css";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

function Fn({ num, children }) {
    return (
        <Tippy
            content={children}
            interactive
            theme="translucent"
            animation="shift-away"
        >
            <span className="tooltip">{num}</span>
        </Tippy>
    );
}

export default Fn;
