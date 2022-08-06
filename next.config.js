module.exports = {
    reactStrictMode: true,
    // webpack5: true,
    webpack(config, options) {
        const { isServer } = options;
        config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            exclude: config.exclude,
            use: [
                {
                    loader: require.resolve("url-loader"),
                    options: {
                        limit: config.inlineImageLimit,
                        fallback: require.resolve("file-loader"),
                        publicPath: `${config.assetPrefix}/_next/static/images/`,
                        outputPath: `${isServer ? "../" : ""}static/images/`,
                        name: "[name]-[hash].[ext]",
                        esModule: config.esModule || false
                    }
                }
            ]
        });

        // eslint-disable-next-line no-param-reassign
        config.resolve.fallback = { fs: false };

        return config;
    },

    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    }
};
