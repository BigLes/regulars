/**
 * Created by Oleksandr Lisovyk on 03.11.2016.
 */
'use strict';

module.exports = (sequelize, DataTypes) => {
    return {
        user: require('./user')(sequelize, DataTypes)
    };
};
