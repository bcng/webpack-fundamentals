module.exports = {
    entry: './core/client/app.js',
    output: {
        filename: './build/bundle.js'
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