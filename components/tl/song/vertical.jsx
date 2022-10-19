import { useState, useEffect, useRef } from "react";
import { Lrc } from "react-lrc";
import styled from "styled-components";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import Parallax from "parallax-js";
import "react-h5-audio-player/lib/styles.css";
// import { singers, lines } from "./lines";

function Song({ SONG_INFO }) {
    const [currentTime, setCurrentTime] = useState(0);
    const [currentPlaying, setCurrentPlaying] = useState(false);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentLanguage, setCurrentLanguage] = useState("en");

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
                        lrc={SONG_INFO.LRC}
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
                                key={index}
                            >
                                <span className="yuukun-lyrics__singerIndicator">
                                    {SONG_INFO.LINES[index].singer.map(
                                        (e, i) => (
                                            // console.log(e);
                                            <span
                                                key={i}
                                                style={{
                                                    "--singerColor": `#${SONG_INFO.SINGERS[e].color}`
                                                }}
                                            />
                                        )
                                    )}
                                </span>
                                <span className="yuukun-lyrics__translatedLine">
                                    {
                                        SONG_INFO.LINES[index].lines[
                                            currentLanguage
                                        ]
                                    }
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
                            {SONG_INFO.SINGERS.map((e, i) => {
                                let isSinging = "";
                                if (
                                    currentLine !== -1 &&
                                    SONG_INFO.LINES[
                                        currentLine
                                    ].singer.includes(i)
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
                                            src={e.image}
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
                            src={SONG_INFO.SONG}
                            listenInterval={0}
                            onListen={(e) => {
                                // console.log(e);
                                setCurrentTime(e.target.currentTime * 1000);
                            }}
                            onPlay={() => {
                                setCurrentPlaying(true);
                            }}
                            onPause={() => {
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

export default Song;

// export { singers, lines };

const Wrapper = styled.div`
    --yk-song-text-color: hsl(160, 21%, 95%);
    /* user-select: none; */

    .yuukun-song__wrapper {
        border-radius: 10px;
        position: relative;
        color: black;
        background: white;
        font-family: "Inter", "Noto Sans JP", sans-serif;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .yuukun-song {
        width: 100%;
        gap: 10px;
    }

    .yuukun-lyrics {
        grid-row: 1/2;
        grid-column: 2/3;
        padding: 15px 15px 100px;
    }

    .yuukun-lyrics__line {
        margin: 0.3em 0;
        display: block;
        font-weight: 400;
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
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;

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
        line-height: 1.3;

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
        width: 100%;

        .MuiToggleButtonGroup-root {
            width: 100%;
            display: flex;
        }

        button.MuiButtonBase-root.MuiToggleButton-root {
            flex-grow: 1;
            border: 0;
            padding: 0.5em 1em;
            font-size: 0.8em;
            font-weight: 800;
            font-family: inherit;
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
        display: flex;
        flex-direction: row;
        gap: 10px;
        position: sticky;
        bottom: 0px;
        justify-content: center;
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
        font-family: "Inter";
        background: none;
        padding: 0;
        box-shadow: none;
        flex: 1 1 auto;
        width: unset;
        min-width: 300px;
        .rhap_main {
            height: 25px;
            gap: 10px;
            padding-right: 5px;
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
        background: hsl(170, 90%, 15%);
    }

    .yuukun-songBackground {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        // filter: blur($blur);

        display: none;
    }

    .music-bg {
        height: 250%;
        aspect-ratio: 1/1;
        position: absolute;
        overflow: hidden;
        border-radius: 50%;
        // animation: rotate 35s linear infinite;
    }

    .music-bg[data-singer="0"] {
        top: 0px;
        left: 0px;
    }

    .music-bg[data-singer="3"] {
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
