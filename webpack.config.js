var path = require('path');

module.exports = {
    context: path.resolve('core/client'),

    entry: './app.js',

    output: {
        path: path.resolve('build/'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },

    module: {
        preloaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1000'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    },

    devServer: {
        contentBase: './core/client'
    },
};