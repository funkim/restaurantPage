const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'Restaurant',
            inject : 'body',
            template : './src/index.html',
        })
    ],
        output: {
        filename : 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        },
        module : {
            rules: [
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"], 
                }
            ]
        }
};