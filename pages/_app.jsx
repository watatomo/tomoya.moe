/* eslint-disable react/jsx-props-no-spreading */
import Head from "next/head";
import "normalize.css/normalize.css";
import "../styles/index.scss";
import { THEME_COLOR } from "../lib/constants";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                <meta name="theme-color" content={THEME_COLOR} />
            </Head>
            <Component {...pageProps} />
            {/* <!-- Cloudflare Web Analytics --> */}
            <script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "089ceca5d79842a499fda95ac9e0751c"}'
            />
            {/* <!-- End Cloudflare Web Analytics --> */}
        </>
    );
}
