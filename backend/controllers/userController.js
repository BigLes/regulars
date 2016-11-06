/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

module.exports = {
    activate(req, res) {
        return res.json({
            login: 'OK',
            token: 'OK'
        });
    },
    get(req, res) {
        return res.sendStatus(200);
    },
    update(req, res) {
        return res.sendStatus(200);
    },
    delete(req, res) {
        return res.sendStatus(200);
    }
};
