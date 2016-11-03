/**
 * Created by Oleksandr Lisovyk on 03.11.2016.
 */
'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
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
};
