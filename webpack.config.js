
const path = require('path');

module.exports = {
    entry: './lib/index.js',
    output: {
        filename: 'escaper.js',
        path: path.resolve(__dirname, 'lib/dist'),
        // umd 사용
        library: 'Escape',
        libraryTarget: 'umd'
    }
};