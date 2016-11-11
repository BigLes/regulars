/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

const config    = require('config');
const jwt       = require('jsonwebtoken');
const db        = require('../database/DataBase');
const messages  = require('../constants/messages');
const hash      = require('../utils/hash');
const mailer    = require('../utils/mailer');

const __identifyUser = (user) => {
    return __findUser(user.login, user.password)
        .then(user => {
            return user ? user.dataValues : Promise.reject();
        });
};

const __findUser = (login, password) => {
    return db.models.user.findOne({
        attributes: ['id', 'login', 'password'],
        where: {login, password}
    })
};

const __authenticateUser = (user) => {
    delete user.password;
    user.token = jwt.sign(user, config.jwtSecret, config.jwt);
    return Promise.resolve(user);
};

const __createUser = (user) => {
    return db.models.user.create(user);
};

const __sendEmail = (user) => {
    return mailer.sendInvitationEmail(user)
        .then(info => {
            console.log(info);
            return user;
        });
};

module.exports = {
    activate(req, res) {
        if (!req.body.email) {
            Promise.resolve()
                .then(() => __identifyUser(req.body))
                .then(user => __authenticateUser(user))
                .then(data => res.json(data))
                .catch(error => {
                    console.log(error);
                    res.status(409).send({error: messages.BAD_LOGIN});
                });
        } else {
            Promise.resolve()
                .then(() => __createUser(req.body))
                .then(user => __sendEmail(user))
                .then(data => res.json(data))
                .catch(error => {
                    console.log(error);
                    res.status(409).send({error: messages.BAD_LOGIN});
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
