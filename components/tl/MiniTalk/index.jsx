/* eslint-disable no-unused-vars */
import { CSSTransition } from "react-transition-group";
import Markdown from "markdown-to-jsx";
import { Bubble, Thought } from "../../mashiro";
import Fn from "../Footnotes";

function MiniTalk({ character, children }) {


    return (
        <div className="minitalk" character={character}>
            {children}
        </div>
    );
}

export default MiniTalk;