import Markdown from "markdown-to-jsx";
import Fn from "../../tl/Footnotes";
import styled from "styled-components";

const P = styled.p`
    color: var(--msr-bubble-thought-color) !important;
`;

function Thought({ children }) {
    return (
        <P>
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
        </P>
    );
}

export default Thought;
