/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const webpack       = require('webpack');
const config        = require('config');
const DB            = require('./backend/database');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
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

const server = app.listen(config.server.port, config.server.host, function() {
    const db = new DB();
    console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
