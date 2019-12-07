'use strict';

const path = require('path');

const common = require('./webpack.config.common');

console.log('[Webpack] Use dev configuration\n');

module.exports = Object.assign({}, {

    mode: 'development',

    devtool: '#source-map',

    output: {
        filename: '[name].js',
        path: path.resolve('./public/dist')
    }
}, common);