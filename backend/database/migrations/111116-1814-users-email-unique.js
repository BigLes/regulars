/**
 * Created by Oleksandr Lisovyk on 11.11.2016.
 */
'use strict';

module.exports = {
    up: function (migration, DataTypes) {
        return Promise.resolve()
            .then(() => migration.changeColumn('users', 'email', {
                type: DataTypes.STRING,
                unique: true
            }))
    },

    down: function (migration, DataTypes) {
        return Promise.resolve()
            .then(() => migration.changeColumn('users', 'email', DataTypes.STRING))
    }
};
