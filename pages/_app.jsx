/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import Head from "next/head";
import "normalize.css/normalize.css";
import "../styles/index.scss";
import { config, dom } from "@fortawesome/fontawesome-svg-core";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
            {/* <!-- Cloudflare Web Analytics --> */}
            {/* <script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "089ceca5d79842a499fda95ac9e0751c"}'
            /> */}
            {/* <!-- End Cloudflare Web Analytics --> */}
        </>
    );
}
