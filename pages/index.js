import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import { TWITTER_UN, SITE_TITLE } from "../lib/constants";
import splash from "../public/img/tl/transparency and masks/still_1677_normal.png";
import Icon from "../public/img/icon.png";

const StyledWrapper = styled.div`
    body {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220.3671875%200%200%200%200%200%200.76171875%200%200%200%200%200%200.81640625%200%200%200%200%200%200.12109375%200%22%20%2F%3E%3C%2Ffilter%3E%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E"),
            linear-gradient(0deg, #d3e8ee 0%, #f3e5cf 75%);
    }
`;

export default function Index({}) {
    return (
        <StyledWrapper>
            <Head>
                <title>{SITE_TITLE}</title>
                <meta name="description" content={TWITTER_UN} />
                <link rel="icon" href="/favicon.ico" />
                {/* <!-- Primary Meta Tags --> */}
                <meta name="title" content={SITE_TITLE} />
                <meta name="description" content={TWITTER_UN} />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tomoya.moe/" />
                <meta property="og:title" content={SITE_TITLE} />
                <meta property="og:description" content={TWITTER_UN} />
                <meta property="og:image" content={splash.src} />
                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://tomoya.moe/" />
                <meta property="twitter:title" content={SITE_TITLE} />
                <meta property="twitter:description" content={TWITTER_UN} />
                <meta property="twitter:image" content={splash.src} />
                <meta name="theme-color" content="#f1c755" />
            </Head>

            <div className="home__wrapper">
                <div className="home__container-main">
                    <div className="home__icon">
                        <Image src={Icon} quality="100" objectFit="cover" />
                    </div>
                    <div className="home__txt">
                        <div className="home__txt-main">
                            ren・he/him・eighteen
                        </div>
                        <div className="home__txt-sub">se asian・aquarius</div>
                        <div className="home__txt-extra">page is a wip...</div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}
