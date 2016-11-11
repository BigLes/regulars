/**
 * Created by Oleksandr Lisovyk on 10.11.2016.
 */
'use strict';

const nodemailer    = require('nodemailer');
const fs            = require('fs');

const transporter = nodemailer.createTransport(fs.readFileSync('backend/utils/connectionString.txt').toString());

module.exports = {
    sendInvitationEmail: (user) => {
        //TODO: provide good options and templates
        const mailOptions = {
            from: '"Regular Expressions Puzzle" <regular.expressions.puzzle@gmail.com>',
            to: user.email,
            subject: 'Welcome',
            text: 'Hello world ?',
            html: '<b>Hello world ?</b>'
        };

        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return reject(error);
                }
                return resolve('Message sent: ' + info.response);
            });
        });
    }
};
