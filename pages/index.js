import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import { TWITTER_UN, SITE_TITLE } from "../lib/constants";
import splash from "../public/img/tl/transparency and masks/still_1677_normal.png";
import Icon from "../public/img/icon.png";

const StyledWrapper = styled.div`
    .home__wrapper {
        background-image: linear-gradient(0deg, #d3e8ee 0%, #f3e5cf 75%);
    }
`;

export default function Home({}) {
    return (
        <StyledWrapper>
            <Head>
                <title>{SITE_TITLE}</title>
                <meta name="description" content={TWITTER_UN} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content={SITE_TITLE} />
                <meta name="description" content={TWITTER_UN} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tomoya.moe/" />
                <meta property="og:title" content={SITE_TITLE} />
                <meta property="og:description" content={TWITTER_UN} />
                <meta property="og:image" content={splash.src} />
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
                        <div className="home__txt-sub">
                            演劇部P + 東雲担当 + りあむP
                        </div>
                        <div className="home__txt-extra">page is a wip...</div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}
