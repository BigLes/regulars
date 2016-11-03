/**
 * Created by Oleksandr Lisovyk on 03.11.2016.
 */
'use strict';

const hash = require('../../../utils/hash');

const __encryptUser = user => {
    user.login = hash.encrypt(user.login);
    user.password = hash.encrypt(user.password);
    user.email = hash.encrypt(user.email);
    return user;
};

const __decryptUser = user => {
    user.login = hash.decrypt(user.login);
    user.password = hash.decrypt(user.password);
    user.email = hash.decrypt(user.email);
    return user;
};

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
