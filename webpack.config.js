/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
const path  = require('path');
const fs    = require('fs');

const config = {
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
    },
    externals: {
        config: process.env.ENV === 'production' ?
            fs.readFileSync(path.join(__dirname, 'config/production.json'), 'utf8') :
            fs.readFileSync(path.join(__dirname, 'config/default.json'), 'utf8')
    }
};
module.exports = config;
