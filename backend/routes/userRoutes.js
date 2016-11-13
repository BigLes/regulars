/**
 * Created by Oleksandr Lisovyk on 01.11.2016.
 */
'use strict';

const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/users')
    .get(userController.get)
    .post(userController.activate);

router.route('/users/:id')
    .get(userController.get)
    .put(userController.update)
    .delete(userController.delete);

module.exports = router;