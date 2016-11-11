/**
 * Created by Oleksandr Lisovyk on 03.11.2016.
 */
'use strict';

const crypto = require('crypto');
const config = require('config');

module.exports = {
    encrypt(text) {
        let cipher = crypto.createCipher(config.crypto.algorithm, config.crypto.secret);
        return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    },

    decrypt(text) {
        let decipher = crypto.createDecipher(config.crypto.algorithm, config.crypto.secret);
        return decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
    }
};
