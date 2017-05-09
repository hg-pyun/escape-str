const webpack = require('webpack');
const path = require('path');

module.exports = function (env) {

    let PHASE = env.phase;

    let filename = (PHASE === 'development') ? 'escape.js' : 'escape.min.js';
    let isProduction = (PHASE !== 'development');

    return {
        entry: './lib/index.js',
        output: {
            filename: filename,
            path: path.resolve(__dirname, 'lib/dist'),
            // umd 사용
            library: 'Escape',
            libraryTarget: 'umd'
        },
        plugins : [
            new webpack.optimize.UglifyJsPlugin({
                beautify: !isProduction,
                mangle: isProduction,
                compress: {
                    warnings: false,
                    drop_console: false
                }
            })
        ]
    };
};