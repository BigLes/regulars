/**
 * Created by Oleksandr Lisovyk on 13.11.2016.
 */
'use strict';

const router            = require('express').Router();
const userController    = require('../controllers/userController');
const Joi               = require('joi');
const validate          = require('express-validation');

//TODO: make search engines to not to track this route
router.route('/verify')
    .get(validate({
        query: {
            token: Joi.string().required()
        }
    }), userController.verify);

module.exports = router;
