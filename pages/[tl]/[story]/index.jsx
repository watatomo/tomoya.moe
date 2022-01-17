import { getStoryIndexStaticPaths } from "../../../lib/api";
import config from "../../../mako.config";

export default function StoryIndex({ story }) {
    return `Index page for ${story}`;
}

export async function getStaticProps({ params }) {
    return {
        props: {
            story: params.story
        }
    };
}

export async function getStaticPaths() {
    const indexes = getStoryIndexStaticPaths(["story"]);

    return {
        paths: indexes.map((post) => ({
            params: {
                tl: config.translationsPath || "tl",
                story: post.story
            }
        })),
        fallback: false
    };
}
