/**
 * Created by Oleksandr Lisovyk on 18.11.2016.
 */
'use strict';

const Joi               = require('joi');
const router            = require('express').Router();
const validate          = require('express-validation');
const puzzleController  = require('../controllers/puzzleController');

router.route('/puzzles')
    .get(puzzleController.get)
    .post(puzzleController.create);

router.route('/puzzles/:id', validate({
    params: {
        id: Joi.number().required()
    }
}))
    .get(puzzleController.get)
    .put(puzzleController.update)
    .delete(puzzleController.delete);

module.exports = router;
