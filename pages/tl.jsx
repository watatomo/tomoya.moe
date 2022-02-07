import TLMeta from "../components/tl/index/TLMeta";
import MultiChapter from "../components/tl/index/MultiChapter";
import SingleChapter from "../components/tl/index/SingleChapter";
import Footer from "../components/footer";
import Header from "../components/header";

export default function TL() {
    return (
        <article>
            <TLMeta />
            <Header />
            <div className="tl__wrapper">
                <div className="tl-container">
                    <MultiChapter />
                    <SingleChapter />
                </div>
            </div>
            <Footer />
        </article>
    );
}
