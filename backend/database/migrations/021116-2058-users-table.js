/**
 * Created by Oleksandr Lisovyk on 02.11.2016.
 */
'use strict';

module.exports = {
    up: function (migration, DataTypes) {
        return migration.createTable('users', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
            login: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
        })
    },

    down: function (migration) {
        return migration.dropTable('users');
    }
};
