import dynamic from "next/dynamic";
import styled from "styled-components";
import { SONG_INFO } from "./SONG_INFO";
import SITE_INFO from "../SITE_INFO.json";

const Lyrics = dynamic(() => import("./../../../../components/tl/song"), {
    ssr: false
});

function Music() {
    return (
        <Wrapper style={{ "--yk-song-background-color": SONG_INFO?.BG_COLOR }}>
            <Lyrics SONG_INFO={SONG_INFO} SITE_INFO={SITE_INFO} />
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

export default Music;
