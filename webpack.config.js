const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: /\/node_modules\//,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.jpg|jpeg|.svg|.png$/i,
                type: 'asset/resource',
                
            },
            {
                test: /\.mhtml$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
                
            },
            {
                test: /\.txt$/i,
                type: 'asset/source'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
            filename: "index.html"
        }),
    ]
}