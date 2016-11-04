/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
var path = require('path');

var config = {
    context: path.join(__dirname, 'frontend'),
    entry: [
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader'],
        }],
    },
    resolveLoader: {
        root: [
            path.join(__dirname, 'node_modules'),
        ],
    },
    resolve: {
        root: [
            path.join(__dirname, 'node_modules'),
        ],
    }
};
module.exports = config;
