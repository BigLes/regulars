/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

const config    = require('config');
const jwt       = require('jsonwebtoken');
const db        = require('../database/DataBase');
const messages  = require('../constants/messages');
const mailer    = require('../utils/mailer');
const EHandler  = require('../utils/ErrorHandler');

const __identifyUser = (user) => {
    return __findUser(user.login, user.password);
};

const __findUser = (login, password) => {
    return db.models.user.findOne({
        attributes: ['id', 'login', 'admin', 'active'],
        where: {login, password}
    }).then(user => {
        if (!user) {
            return Promise.reject(messages.BAD_LOGIN);
        }
        if (!user.active) {
            return Promise.reject(messages.NOT_ACTIVE);
        }
        delete user.active;
        return Promise.resolve(user);
    })
};

/**
 * Authenticates user - adds token
 * @param {Object} user User object
 * @param {boolean} [shouldExpire] True, if token should expire
 * @returns {Promise.<T>}
 * @private
 */
const __authenticateUser = (user, shouldExpire) => {
    let fakeUser = Object.assign({}, user);
    let options = Object.assign({}, config.jwt);
    if (!shouldExpire) {
        delete options.expiresIn;
    }
    delete fakeUser.email;
    user.token = jwt.sign(fakeUser, config.jwtSecret, options);
    return Promise.resolve(user);
};

const __createUser = (user) => {
    return db.models.user.create(user)
        .then(user => user.dataValues)
};

const __filterUser = (user) => {
    let result = {};
    if (user.admin) {
        result.admin = true;
    }
    if (user.email) {
        result.email = user.email;
    }
    result.login = user.login;
    result.id = user.id;
    return result;
};

const __sendEmail = (user) => {
    return mailer.sendInvitationEmail(user)
        .then(info => {
            console.log(info);
            return user;
        });
};

const __verifyToken = (token) => {
    try {
        let user = jwt.verify(token, config.jwtSecret, config.jwt);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

const __activateUser = (user) => {
    return db.models.user.findOne({where: {id: user.id}})
        .then(user => user.update({active: true}));
};

module.exports = {
    activate(req, res) {
        if (!req.body.email) {
            Promise.resolve()
                .then(() => __identifyUser(req.body))
                .then(user => __filterUser(user))
                .then(user => __authenticateUser(user, true))
                .then(data => res.json(data))
                .catch(error => EHandler.sendConflict(error, res));
        } else {
            Promise.resolve()
                .then(() => __createUser(req.body))
                .then(user => __filterUser(user))
                .then(user => __authenticateUser(user))
                .then(user => __sendEmail(user))
                .then(data => res.json(data))
                .catch(error => EHandler.sendConflict(error, res));
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
    },
    verify(req, res) {
        Promise.resolve()
            .then(() => __verifyToken(req.query.token))
            .then(user => __activateUser(user))
            .then(user => res.redirect('/'))
            .catch(error => {
                console.error(error);
                res.redirect('/');
            });
    }
};
