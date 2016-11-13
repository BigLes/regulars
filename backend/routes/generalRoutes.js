/**
 * Created by Oleksandr Lisovyk on 13.11.2016.
 */
'use strict';

const router = require('express').Router();
const userController = require('../controllers/userController');

//TODO: make search engines to not to track this route
router.route('/verify')
    .get(userController.verify);

module.exports = router;
