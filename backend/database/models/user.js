/**
 * Created by Oleksandr Lisovyk on 03.11.2016.
 */
'use strict';

const hash = require('../../utils/hash');

const __encryptUser = user => {
    if (user.login)     user.login = hash.encrypt(user.login);
    if (user.password)  user.password = hash.encrypt(user.password);
    if (user.email)     user.email = hash.encrypt(user.email);

    if (user.where) {
        if (user.where.login)     user.where.login = hash.encrypt(user.where.login);
        if (user.where.password)  user.where.password = hash.encrypt(user.where.password);
        if (user.where.email)     user.where.email = hash.encrypt(user.where.email);
    }
    return user;
};

const __decryptUser = data => {
    if (data.login)     data.login = hash.decrypt(data.login);
    if (data.password)  data.password = hash.decrypt(data.password);
    if (data.email)     data.email = hash.decrypt(data.email);
    return data;
};

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
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
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        hooks: {
            beforeCreate:   user => __encryptUser(user),
            afterCreate:    user => __decryptUser(user),
            beforeFind:     user => __encryptUser(user),
            afterFind:      user => __decryptUser(user),
            beforeUpdate:   user => __encryptUser(user),
            afterUpdate:    user => __decryptUser(user),
        }
    })
};
