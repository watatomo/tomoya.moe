import TLMeta from "../components/tl/index/TLMeta";
import MultiChapter from "../components/tl/index/MultiChapter";
import SingleChapter from "../components/tl/index/SingleChapter";
import Footer from "../components/footer";
import Header from "../components/header";
import styled from "styled-components";

const Article = styled.article`
    .tl__wrapper {
        display: flex;
        min-height: calc(
            100vh - var(--header-height) - var(--footer-height) - 3em
        );
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: center;
        font-family: "Inter var", "M PLUS Rounded 1c", sans-serif;
        color: var(--text-primary);
        background: var(--background-secondary);

        .tl-container {
            margin: 2em 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            justify-content: center;
            max-width: 1000px;

            > div:not(:last-child) {
                margin-bottom: 2em;
            }
        }

        + footer {
            margin: 0;
        }
    }

    @media (max-width: 900px) {
        .tl__wrapper {
            font-size: 14px;
        }
    }
`;

export default function TL() {
    return (
        <Article>
            <TLMeta />
            <Header />
            <div className="tl__wrapper">
                <div className="tl-container">
                    <MultiChapter />
                    <SingleChapter />
                </div>
            </div>
            <Footer />
        </Article>
    );
}
