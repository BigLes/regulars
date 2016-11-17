/**
 * Created by Oleksandr Lisovyk on 01.11.2016.
 */
'use strict';

const Joi               = require('joi');
const router            = require('express').Router();
const config            = require('config');
const validate          = require('express-validation');
const userController    = require('../controllers/userController');

router.route('/users')
    .get(userController.get)
    .post(validate({
        body: {
            login: Joi.string().regex(new RegExp(config.rules.login)).required(),
            email: Joi.string().regex(new RegExp(config.rules.email)),
            password: Joi.string().regex(new RegExp(config.rules.password)).required()
        }
    }), userController.activate);

router.route('/users/:id')
    .get(userController.get)
    .put(userController.update)
    .delete(userController.delete);

module.exports = router;