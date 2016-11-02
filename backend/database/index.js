/**
 * Created by Oleksandr Lisovyk on 02.11.2016.
 */
'use strict';

const config = require('config');
const Sequelize = require('sequelize');
const Umzug = require('umzug');

const sequelize = new Sequelize(config.db.dbName, config.db.dbLogin, config.db.dbPass, {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect
});

const applyMigrations = (sequelize) => {
    const umzug = new Umzug({
        storage: 'sequelize',
        storageOptions: {sequelize},
        migrations: {
            params: [sequelize.getQueryInterface(), sequelize.constructor, () => {
                throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
            }],
            pattern: /\.js$/,
            path: './backend/database/migrations'
        }
    });

    return umzug.up();
};

module.exports = function () {
    applyMigrations(sequelize);
};
