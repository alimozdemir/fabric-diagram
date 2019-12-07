'use strict';

const path = require('path');

module.exports = {
    entry: {
        'fabric-diagram': path.resolve('./src/index.js')
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve('./public/dist'),

        library: 'Canvas',
        libraryTarget: 'var'
    },
    externals: {
        fabric: 'fabric'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};