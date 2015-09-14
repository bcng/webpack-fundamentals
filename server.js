var express = require('express');

var app = express();

if (app.get('env') === 'development') {
    var webpackMiddleware = require('webpack-dev-middleware'),
        webpack = require('webpack'),
        config = require('./webpack.config');

    app.use(webpackMiddleware(webpack(config), {
        inline: true,
        publicPath: '/build/'
    }));
}

app.use(express.static('./core/client'));

app.listen(5000);