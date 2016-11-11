/**
 * Created by Oleksandr Lisovyk on 11.11.2016.
 */
'use strict';

module.exports = {
    up: function (migration, DataTypes) {
        return Promise.resolve()
            .then(() => migration.addColumn('users', 'active', {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }))
            .then(() => migration.addColumn('users', 'admin', {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }))
    },

    down: function (migration) {
        return Promise.resolve()
            .then(() => migration.removeColumn('users', 'active'))
            .then(() => migration.removeColumn('users', 'admin'));
    }
};
