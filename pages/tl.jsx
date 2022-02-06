import TLMeta from "../components/tl/index/TLMeta";
import MultiChapter from "../components/tl/index/MultiChapter";
// import SingleChapter from "../components/tl/index/SingleChapter";

export default function TL() {
    return (
        <article>
            <TLMeta />
            <div className="tl__wrapper">
                <div className="tl-container">
                    <MultiChapter />
                </div>
            </div>
        </article>
    );
}
