import { THEME_COLOR } from "../lib/constants";

export default function Meta() {
    return (
        <>
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#000000"
            />
            <meta name="msapplication-TileColor" content={THEME_COLOR} />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="theme-color" content={THEME_COLOR} />
        </>
    );
}
