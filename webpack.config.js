const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets : ['@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.tsx'],
    },
    plugins: [new MiniCssExtractPlugin(),new HtmlWebpackPlugin()]
}