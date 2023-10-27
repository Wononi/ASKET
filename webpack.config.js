// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {};
    if (isProd) {
        config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
    }
    return config;
};

const excludeSourceMap = () => {
    if (isProd) {
        return 'bundle.js';
    }
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: './js/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: './js/[name].bundle.js',
        assetModuleFilename: 'images/[name].[hash][ext][query]'
    },
    optimization: optimization(),
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "../index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "privacy_policy/index.html",
            template: "../privacy_policy/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "terms_of_conditions/index.html",
            template: "../terms_of_conditions/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "redirect/index.html",
            template: "../redirect/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './style/style.[contenthash].css'
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: excludeSourceMap(),
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                loader: "html-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: true,
                            import: true,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    }
}
