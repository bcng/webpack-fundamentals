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
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
        ]
    },
    devServer: {
        contentBase: './core/client'
    },
};