/**
 * Created by lisanmei on 2017/9/14.
 */
const webpack = require('webpack'),
    merge = require('webpack-merge'),
    config = require('../config'),
    baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', "css-loader?sourceMap", "sass-loader?sourceMap"]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: config.env
            }
        })
    ],
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map'
});

