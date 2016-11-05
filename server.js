/**
 * Created by Oleksandr Lisovyk on 01.11.2016.
 */
'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const webpack       = require('webpack');
const config        = require('config');
const DB            = require('./backend/database/DataBase');
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
app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome'));
app.use('/fonts', express.static(__dirname + '/node_modules/font-awesome/fonts'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const __createDB = () => {
    return DB();
};

const __createSrv = db => {
    return new Promise((resolve, reject) => {
        const server = app.listen(config.server.port, config.server.host, (err) => err ? reject(err) : resolve({server, db}));
    });
};

Promise.resolve()
    .then(() => __createDB())
    .then(db => __createSrv(db))
    .then(({server, db}) => {
        console.log(`Example app listening at http: ${server.address().address}:${server.address().port}`);
    })
    .catch(error => console.log(`Error starting the server. ${error.message ? error.message : error}`));
