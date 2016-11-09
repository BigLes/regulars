/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

const db        = require('../database/DataBase');
const messages  = require('../constants/messages');

const hash = require('../../utils/hash');

const __findUser = (login, password) => {
    return db.models.user.findOne({
        attributes: ['id', 'login', 'password'],
        where: {login, password}
    });
};

const __loginUser = (user) => {
    return __findUser(user.login, user.password)
        .then(user => {
            return user ? Promise.resolve(user) : Promise.reject()
        });
};

module.exports = {
    activate(req, res) {
        if (!req.body.email) {
            __loginUser(req.body)
                .then(data => res.json(data))
                .catch(() => {
                    res.status(409).send({error: messages.BAD_LOGIN});
                });
        } else {
            res.json({
                login: 'OK',
                token: 'OK'
            });
        }
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
