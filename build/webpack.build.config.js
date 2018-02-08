/**
 * Created by lisanmei on 2017/9/14.
 */
const webpack = require('webpack'),
    merge = require('webpack-merge'),
    proxyMiddleware = require('http-proxy-middleware'),
    config = require('../config'),
    baseConfig = require('./webpack.base.config');


module.exports = merge(baseConfig, {
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_debugger: true,
                drop_console: true,
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: config.env
            }
        })
    ]
});

