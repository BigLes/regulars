/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var server = app.listen(3003, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
