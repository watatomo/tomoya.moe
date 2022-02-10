import { useState, useEffect, useRef } from "react";
import { Lrc } from "react-lrc";
import styled from "styled-components";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Music from "./moonlightdisco.mp3";
// import Parallax from "parallax-js";
import "react-h5-audio-player/lib/styles.css";
import singer0 from "./singer0.webp";
import singer1 from "./singer1.webp";
import singer2 from "./singer2.webp";
import singer3 from "./singer3.webp";
import singer4 from "./singer4.webp";
import { singers, lines } from "./lines";

const singerImages = [singer0, singer1, singer2, singer3, singer4];

function MoonlightDisco() {
    const [currentTime, setCurrentTime] = useState(0);
    const [currentPlaying, setCurrentPlaying] = useState(false);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentLanguage, setCurrentLanguage] = useState("en");
    const [width, setWidth] = useState(window.innerWidth);

    const player = useRef();
    const lrcRef = useRef();
    const songElement = useRef();

    const handleLanguage = (event, newLanguage) => {
        if (newLanguage !== null) {
            setCurrentLanguage(newLanguage);
        }
    };

    useEffect(() => {
        if (
            currentLanguage !== "jp" &&
            currentLanguage !== "rm" &&
            currentLanguage !== "en"
        ) {
            setCurrentLanguage("en");
        }
    }, [currentLanguage]);

    useEffect(() => {
        // console.log(lines[currentLine]);
        lrcRef.current.scrollToCurrentLine();
    }, [currentLine]);

    useEffect(() => {
        // var scene = document.getElementById("yuukun-songBackground__wrapper");
        // var parallaxInstance = new Parallax(scene);

        try {
            window.addEventListener("resize", (event) => {
                try {
                    setWidth(songElement.current.clientWidth);
                } catch {}
                // console.log(width);
            });
        } catch {}
    }, []);

    // lines[currentLine].singer.includes(i)?"singing":""

    return (
        <Wrapper>
            <div className="yuukun-song__wrapper" ref={songElement}>
                <div className="yuukun-song">
                    <div className="yuukun-songInfo">
                        <div className="yuukun-lyricsLanguage">
                            <ToggleButtonGroup
                                value={currentLanguage}
                                exclusive
                                onChange={handleLanguage}
                            >
                                <ToggleButton value="en">English</ToggleButton>
                                <ToggleButton value="jp">Japanese</ToggleButton>
                                <ToggleButton value="rm">Romaji</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </div>
                    <Lrc
                        className={`yuukun-lyrics ${
                            currentPlaying ? "yuukun-lyrics--playing" : null
                        }`}
                        lrc={LRC}
                        ref={lrcRef}
                        lineRenderer={({ index, active, line }) => (
                            <span
                                className={`yuukun-lyrics__line ${
                                    active ? "yuukun-lyrics__line--active" : ""
                                }`}
                                onClick={() => {
                                    player.current.audio.current.currentTime =
                                        line.startMillisecond / 1000;
                                }}
                            >
                                <span className="yuukun-lyrics__singerIndicator">
                                    {lines[index].singer.map((e, i) => (
                                        // console.log(e);
                                        <span
                                            key={i}
                                            style={{
                                                "--singerColor": `#${singers[e].color}`
                                            }}
                                        />
                                    ))}
                                </span>
                                <span className="yuukun-lyrics__translatedLine">
                                    {lines[index].lines[currentLanguage]}
                                </span>
                            </span>
                        )}
                        currentMillisecond={currentTime + 100}
                        topBlank
                        bottomBlank
                        onLineChange={(i) => {
                            setCurrentLine(i.index);
                        }}
                        intervalOfRecoveringAutoScrollAfterUserScroll="9999999"
                    />
                    <div className="yuukun-audioPlayer">
                        <div className="yuukun-singer">
                            {singers.map((e, i) => {
                                let isSinging = "";
                                if (
                                    currentLine !== -1 &&
                                    lines[currentLine].singer.includes(i)
                                ) {
                                    isSinging = "singing";
                                }
                                return (
                                    <div
                                        data-singer={e.id}
                                        key={i}
                                        className={isSinging}
                                    >
                                        <Image
                                            key={e.id}
                                            src={singerImages[e.id]}
                                            alt={e.name}
                                            layout="fill"
                                            objectFit="cover"
                                            palaceholder="blur"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <AudioPlayer
                            className="yuukun-audioControls"
                            ref={player}
                            src={Music}
                            listenInterval={0}
                            onListen={(e) => {
                                // console.log(e);
                                setCurrentTime(e.target.currentTime * 1000);
                            }}
                            onPlay={(e) => {
                                setCurrentPlaying(true);
                            }}
                            onPause={(e) => {
                                setCurrentPlaying(false);
                            }}
                            layout="horizontal-reverse"
                            showJumpControls={false}
                            // customVolumeControls={[]}
                            customAdditionalControls={[]}
                            customIcons={{
                                play: <PlayArrowRoundedIcon />,
                                pause: <PauseRoundedIcon />
                            }}
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default MoonlightDisco;

const LRC = `
[00:00.46]月夜に浮かぶ月光のスロープ
[00:07.42]お伽話じゃラストシーン
[00:14.34]引き止められて本当はうれしい
[00:21.34]さみしいけれど…もう帰らなくちゃ
[00:26.80]
[00:26.801]Once upon a time…?
[00:29.82]NOW☆
[00:30.66]Yes!!
[00:31.42](さぁ一緒に)
[00:32.52]Dancing!! One night Fever!!
[00:35.98]ムーンライトディスコ
[00:37.70](ぷかぷか)
[00:39.46]Dancing!! Playback Fever!!
[00:43.02](踊りましょう)
[00:44.32]
[00:44.98]潤んだ目の Funky girl
[00:47.60]アツイ友情ここにBFFを
[00:51.98]もらったんだね eternity
[00:54.64]ブレスよりも絆っぽいじゃん
[00:58.70]
[00:58.701]思い出話は尽きない
[01:02.02]なんでちょっと黙っちゃうの
[01:05.58]笑ってる顔を 最後に見せてよ
[01:10.44]
[01:10.441]さあ踊ろう思い切り
[01:14.54]残さず焼き付けるよ
[01:17.82]満月はミラーボール
[01:21.22]地上を照らし出す
[01:25.02]浮かれてキミともっと
[01:28.48]この時間をアンコール
[01:31.64]涙はそっとしまって
[01:35.26]手を振りあおう
[01:39.02]
[01:42.50]Dancing!! One night Fever!!
[01:46.20]ムーンライトディスコ
[01:49.52]Dancing!! Playback Fever!!
[01:53.24]
[01:54.94]チークタイムは Shyなboy
[01:57.64]ロマンチック程遠いまま
[02:01.98]それも一種の Only one
[02:04.64]永久欠番満更じゃない
[02:08.64]
[02:08.641]刺激的セーシュン
[02:10.32]地球って So happy
[02:12.34]はしゃぎ倒すには周回必須
[02:15.70]あの店のメニュー制覇し損ねた
[02:19.20]制服返すのヤダなあ
[02:22.76]
[02:22.761]つきあってくれてありがとう
[02:26.08]一生分の放課後を
[02:29.58]使い果たせたよ 来世もヨロシク
[02:34.46]
[02:34.461]さあ歌おう大声で
[02:38.62]名前を呼びあってさ
[02:41.88]エンドロール代わりに
[02:45.32]この夜を照らすよ
[02:49.10]忘れないキミといた
[02:52.62]かけがえないこの日々
[02:55.66]サヨナラがツライなんて
[02:59.34]わかってたのに
[03:02.18]
[03:02.181]空を覆うくらい
[03:05.54]ピカピカのUFOだとか
[03:08.84]派手めキョーシュクですが
[03:12.30]お迎えが来たから
[03:16.24]ハチャメチャに楽しい
[03:18.60]時間
[03:19.52]時代
[03:20.40]時空
[03:21.26]次元
[03:22.16]超えたー☆
[03:25.62]最高の出会いに…
[03:32.98]
[03:38.82]またいつの日か
[03:41.46]ムーンライトディスコで
[03:45.20]
[03:45.201]踊ろう思い切り
[03:48.64]残さず焼き付けるよ
[03:51.98]満月はミラーボール
[03:51.98]この星を照らし出して
[03:59.24]浮かれてキミともっと
[04:02.70]何度だってアンコール
[04:05.76]遠い空の彼方で 手を振りあおう
[04:13.20]
[04:15.54](さぁご一緒に)
[04:16.70]Dancing!! One night Fever!!
[04:20.18]ムーンライトディスコ
[04:22.18](良い日和)
[04:23.74]Dancing!! Playback Fever!!
[04:27.52]
`;

// export { singers, lines };

const Wrapper = styled.div`
    --yk-song-text-color: hsl(160, 21%, 95%);
    /* user-select: none; */

    .yuukun-song__wrapper {
        /* min-height: 550px; */
        /* height: 240px;
        width: 480px; */
        /* max-height: 100vh; */
        /* overflow: hidden; */
        border-radius: 10px;
        position: relative;
        color: black;
        background: white;

        font-family: "Inter var", "Quicksand", "M PLUS Rounded 1c", sans-serif;
        // font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .yuukun-song {
        width: 100%;
        /* height: 100%; */
        /* max-height: 100vh; */
        /* padding: 15px; */
        /* display: grid;
    grid-template-columns: 140px auto;
    grid-template-rows: 1fr auto; */
        gap: 10px;
    }

    .yuukun-lyrics {
        grid-row: 1/2;
        grid-column: 2/3;
        /* height: 100%; */
        padding: 15px 15px 50px;
        /* mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    ); */
    }

    .yuukun-lyrics__line {
        margin: 0.3em 0;
        display: block;
        font-weight: 400;
        font-family: "Inter var", "M PLUS Rounded 1c", sans-serif;
        /* opacity: 0.5; */
        display: grid;
        grid-template-columns: 5px 1fr;
        gap: 10px;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        mask-image: linear-gradient(
            to right,
            black 0%,
            black 95%,
            transparent 100%
        );
        transition: opacity 0.2s ease;
        cursor: pointer;
    }

    .yuukun-lyrics--playing .yuukun-lyrics__line {
        opacity: 0.5;
    }

    .yuukun-lyrics__singerIndicator {
        width: 100%;
        height: 100%;
        display: block;
        background: white;
        // border: solid 2px white;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
        // box-shadow: 0px 0px 2px #fff;

        span {
            display: block;
            flex: 1 1 0px;
            background-color: var(--singerColor);
            opacity: 0.6;
        }
    }

    .yuukun-lyrics__translatedLine {
        display: block;
        transition: all 0.6s cubic-bezier(0, 1, 0, 1), transform 0.2s ease;
        line-height: 1.2;

        &:hover {
            transform: translate(0.05em, 0);
        }
    }

    .yuukun-lyrics--playing .yuukun-lyrics__line--active {
        font-size: 1.4em;
        white-space: normal;

        opacity: 1;
        mask-image: linear-gradient(to right, black 0%, black 95%, black 100%);
    }

    .yuukun-songInfo {
        grid-row: 1/3;
        grid-column: 1/2;
        /* display: grid; */
        /* grid-template-rows: 60px 1fr auto; */
        gap: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: sticky;
        top: 0px;
        background: white;
        z-index: 100;

        border-radius: 10px 10px 0px 0px;
        overflow: hidden;
    }

    .yuukun-trackArt {
        position: relative;
        flex-grow: 1;
        width: 140px;
        /* height: */
        /* aspect-ratio: 1/1; */
        border-radius: 10px;
        overflow: hidden;
    }

    .yuukun-trackInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.15em;
    }

    .yuukun-trackInfo__title {
        font-size: 1.1em;
        font-weight: 800;
    }

    .yuukun-trackInfo__artist {
        font-size: 0.9em;
        opacity: 0.6;
    }

    .yuukun-lyricsLanguage {
        /* display: grid; */
        /* place-items: center; */
        width: 100%;

        .MuiToggleButtonGroup-root {
            width: 100%;
            display: flex;
            /* background: white; */
        }

        button.MuiButtonBase-root.MuiToggleButton-root {
            flex-grow: 1;
            border: 0;
            /* border-radius: 99px; */
            /* width: 35px; */
            /* height: 25px; */
            padding: 0.5em 1em;
            /* background: rgba(255, 255, 255, 0.2);
      color: #fff; */
            font-size: 0.8em;
            font-weight: 800;
            font-family: inherit;
            /* padding: 0 0 1px 1px; */
            /* transform: scale(0.9); */
            transition: all 1s cubic-bezier(0, 1, 0, 1);
            box-shadow: inset 0 -3px #000;
            opacity: 0.2;
            border-radius: 0px;

            &.Mui-selected {
                opacity: 1;
                background: transparent;
            }
        }
    }

    .yuukun-audioPlayer {
        /* grid-row: 2/3;
    grid-column: 2/3; */
        display: flex;
        flex-direction: row;
        gap: 10px;
        position: sticky;
        bottom: 0px;
        justify-content: center;
        /* font-family: "DM Mono";
         */
        font-variant-numeric: tabular-nums;
        background: black;
        padding: 10px 0px;

        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        flex-wrap: wrap;
    }

    .yuukun-singer {
        min-width: 240px;
        height: 40px;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0px;
        flex: 0 0 auto;
        margin: -15px 0px;
        padding-bottom: 5px;
        height: 50px;

        & > div {
            flex: 0 1 auto;
            position: relative;
            overflow: hidden;
            transition: all 0.2s ease;
            filter: saturate(0.3) brightness(0.5);
            border-radius: 30%;
            height: 80%;
            aspect-ratio: 1/1;
            border: solid 3px black;

            &.singing {
                // flex-grow: 1.5;
                filter: saturate(1) brightness(1);
                height: 100%;

                img {
                    transform: scale(1.05);
                }
            }
        }
    }

    .yuukun-audioControls.rhap_container {
        font-family: "Inter", sans-serif;
        background: none;
        padding: 0;
        box-shadow: none;
        flex: 1 1 auto;
        width: unset;
        min-width: 300px;
        .rhap_main {
            height: 25px;
            gap: 15px;
            padding-right: 35px;
        }

        .rhap_controls-section {
            flex: 1 0 30%;
            margin: 0;
            min-width: 100px;
            max-width: 130px;
        }

        .rhap_progress-section {
            flex: 1 0 70%;
            display: grid;
            grid-template-columns: 42px 1fr auto;
            gap: 10px;
        }

        .rhap_current-time {
            justify-self: right;
        }

        .rhap_time {
            font-size: 14px;
            color: var(--yk-song-text-color);
        }

        .rhap_progress-container {
            margin: 0;
        }

        .rhap_progress-bar {
            height: 4px;
            background: hsla(0, 0%, 100%, 0.2);
        }

        .rhap_download-progress {
            background: hsla(0, 0%, 100%, 0.2);
        }

        .rhap_progress-filled {
            background: hsla(0, 0%, 100%, 0.8);
        }

        .rhap_progress-indicator {
            width: 12px;
            height: 12px;
            margin-left: -6px;
            top: -4px;
            background: white;
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
                rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }

        .rhap_main-controls-button {
            color: var(--yk-song-text-color);
            display: grid;
            place-items: center;
            margin: 0;

            .MuiSvgIcon-root {
                font-size: 0.75em;
            }
        }

        .rhap_play-pause-button {
            width: 30px;
            height: 30px;
        }

        .rhap_volume-controls {
            justify-content: stretch;
        }
        .rhap_volume-button {
            color: white;
        }
        .rhap_volume-indicator {
            background: white;
            opacity: 1;
        }

        .rhap_additional-controls {
            display: none;
        }
    }

    $blur: 80px;

    .yuukun-songBackground__wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
        overflow: hidden;
        background: hsl(185, 90%, 15%);
    }

    .yuukun-songBackground {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        // filter: blur($blur);

        display: none;
    }

    .abwybg {
        height: 250%;
        aspect-ratio: 1/1;
        position: absolute;
        overflow: hidden;
        border-radius: 50%;
        // animation: rotate 35s linear infinite;
    }

    .abwybg[data-singer="0"] {
        top: 0px;
        left: 0px;
    }

    .abwybg[data-singer="3"] {
        bottom: 0px;
        right: 0px;
        mix-blend-mode: luminosity;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
