import { THEME_COLOR } from "../lib/constants";

export default function Meta() {
    return (
        <>
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
        </>
    );
}
