var path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var cfg = {
    srcPath: path.resolve('./src'),
    distPath: path.resolve('./dist')
}

module.exports = {
    entry: path.join(cfg.srcPath, 'ts/main.ts'),
	mode: 'development',
	target: 'web',
    devtool: 'inline-source-map',
    output: {
        path: cfg.distPath,
        filename: '[name].[contenthash].js'
    },

    devServer: {
        open: false,
        port: 8000,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
    ]
};
