const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';


module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    devtool: isDevelopment ? 'eval-source-map' : 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: isDevelopment ? 'development' : 'production',

    resolve: {
        extensions: ['.js', '.jsx'] 
    },

    plugins:[
        new HtmlWebpackPlugin ({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],

    devServer: {
        static: path.resolve(__dirname, 'public'),

    },

    module: {
        rules: [
            {
                test:   /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:   /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:   /\.scss$/,
                exclude: /node_modules/,
                use: 'sass-loader'
            }
        ],
    }
};