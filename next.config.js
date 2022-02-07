module.exports = {
    reactStrictMode: true,
    webpack5: true,
    webpack(config) {
        return config;
    },

    experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true
    }
};
