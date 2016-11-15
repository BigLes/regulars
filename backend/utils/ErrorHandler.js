/**
 * Created by Oleksandr Lisovyk on 15.11.2016.
 */
'use strict';

const messages = require('../constants/messages');

const __errorHandler = (error, status, res) => {
    console.error(error);
    if (error.substr) {
        return res.status(status).json({error: error});
    }
    return res.status(500).json({error: messages.SERVER_ERROR});
};

module.exports = {
    sendConflict(error, res) {
        __errorHandler(error, 409, res);
    },
    sendNotFound(error, res) {
        __errorHandler(error, 404, res);
    },
    sendForbidden(error, res) {
        __errorHandler(error, 403, res);
    },
    sendUnauthorized(error, res) {
        __errorHandler(error, 401, res);
    }
};
