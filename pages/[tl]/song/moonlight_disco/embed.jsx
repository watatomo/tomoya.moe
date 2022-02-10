import dynamic from "next/dynamic";
import styled from "styled-components";

const Lyrics = dynamic(
    () => import("../../../../components/tl/song/MoonlightDisco"),
    {
        ssr: false
    }
);

function MoonlightDiscoPage() {
    return (
        <Wrapper>
            <Lyrics />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 480px;
    height: 360px;
    width: 100%;
    height: 100%;
    position: relative;
`;

export default MoonlightDiscoPage;
