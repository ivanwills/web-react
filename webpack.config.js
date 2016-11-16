'use strict';

const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: [
            "./index.js",
        ],
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: "/assets",
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
        rules: [
            {
                test: /[.]scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
    ],
    devServer: {
        contentBase: __dirname + "/src",
    },
};
