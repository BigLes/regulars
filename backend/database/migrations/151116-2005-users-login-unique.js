/**
 * Created by Oleksandr Lisovyk on 15.11.2016.
 */
'use strict';

module.exports = {
    up: function (migration, DataTypes) {
        return Promise.resolve()
            .then(() => migration.changeColumn('users', 'login', {
                type: DataTypes.STRING,
                unique: true
            }))
    },

    down: function (migration, DataTypes) {
        return Promise.resolve()
            .then(() => migration.changeColumn('users', 'login', DataTypes.STRING))
    }
};
