/* eslint-disable react/jsx-props-no-spreading */
import Head from "next/head";
import "normalize.css/normalize.css";
import "../styles/index.scss";
import { THEME_COLOR } from "../lib/constants";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                <meta name="theme-color" content={THEME_COLOR} />
                <link rel="icon" href="/favicon.ico?v=2" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png?v=2"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png?v=2"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png?v=2"
                />
                <link rel="manifest" href="/site.webmanifest?v=2" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg?v=2"
                    color={THEME_COLOR}
                />
                <meta name="msapplication-TileColor" content={THEME_COLOR} />
                <meta
                    name="msapplication-config"
                    content="/browserconfig.xml?v=2"
                />
            </Head>
            <Component {...pageProps} />
            {/* <!-- Cloudflare Web Analytics --> */}
            <script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "089ceca5d79842a499fda95ac9e0751c"}'
            />
            {/* <!-- End Cloudflare Web Analytics --> */}
        </ThemeProvider>
    );
}
