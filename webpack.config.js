const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    entry: './src/entry/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],

        plugins: [new TsconfigPathsPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/entry/index.html',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.DefinePlugin({
            ___BUILDDATE___: "'" + (new Date()).toLocaleDateString('ru-RU') + "'"
         })
    ],
    devServer: {
		port: 4200,
        historyApiFallback: true,
		contentBase: path.join(__dirname, 'src/html'),
		watchContentBase: true,
		hot: true
	},
}
