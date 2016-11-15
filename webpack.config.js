'use strict';

const webpack = require("webpack");

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: ["./index.js"],
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: "/assets",
    },
    devServer: {
        contentBase: __dirname + "/src",
    }
};
