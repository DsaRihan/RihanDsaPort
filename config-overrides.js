// config-overrides.js

module.exports = function override(config, env) {
    // Add the rule to ignore source map warnings from the specific module
    config.ignoreWarnings = [
        {
            module: /@mediapipe\/tasks-vision/,
            message: /Failed to parse source map/,
        },
        // Optional: Ignores all source map warnings from all node_modules
        // {
        //     module: /node_modules/,
        //     message: /Failed to parse source map/,
        // },
    ];
    return config;
};