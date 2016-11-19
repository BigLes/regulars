/**
 * Created by Oleksandr Lisovyk on 18.11.2016.
 */
'use strict';

const Joi               = require('joi');
const jwt               = require('jsonwebtoken');
const config            = require('config');
const router            = require('express').Router();
const validate          = require('express-validation');
const EHandler          = require('../utils/ErrorHandler');
const puzzleController  = require('../controllers/puzzleController');

const validation = (token) => {
    try {
        return jwt.verify(token, config.jwtSecret, config.jwt);
    } catch (error) {
        return error;
    }
};

const auth = (req, res, next) => {
    if (validation(req.header('Authorization'))) {
        return next();
    }
    return EHandler.sendUnauthorized({}, res);
};

router.route('/puzzles')
    .get(puzzleController.get)
    .post(auth, puzzleController.create);

router.route('/puzzles/:id', validate({
    params: {
        id: Joi.number().required()
    }
}))
    .get(puzzleController.get)
    .put(auth, puzzleController.update)
    .delete(auth, puzzleController.delete);

module.exports = router;
