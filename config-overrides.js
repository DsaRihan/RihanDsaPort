// config-overrides.js

module.exports = function override(config, env) {
    // CRA's source-map-loader can hard-fail the build when some dependencies ship
    // broken/empty sourcemaps. Exclude node_modules from source-map-loader to keep
    // production builds stable.
    config.module.rules.forEach((rule) => {
        if (!rule.oneOf) return;
        rule.oneOf.forEach((oneOfRule) => {
            if (
                oneOfRule.enforce === 'pre' &&
                oneOfRule.loader &&
                oneOfRule.loader.includes('source-map-loader')
            ) {
                oneOfRule.exclude = /node_modules/;
            }
        });
    });

    // Also ignore remaining sourcemap parse warnings if any slip through.
    config.ignoreWarnings = [
        { message: /Failed to parse source map/i },
    ];
    return config;
};