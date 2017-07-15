/**
 * Created by Oleksandr Lisovyk on 10.11.2016.
 */
'use strict';

const nodemailer    = require('nodemailer');
const fs            = require('fs');
const config        = require('config');

// const transporter = nodemailer.createTransport(JSON.parse(fs.readFileSync('backend/utils/connectionString.txt').toString()));

module.exports = {
    sendInvitationEmail(user) {
        //TODO: provide good options and templates
        // const mailOptions = {
        //     from: '"Regular Expressions Puzzle" <regular.expressions.puzzle@gmail.com>',
        //     to: user.email,
        //     subject: 'Welcome',
        //     //TODO: add functionality to re-send email
        //     text: `Hello, ${user.login}! To verify your email, please use this link: ${config.server.url + '/verify?token=' + user.token}`,
        //     html: `<b>Hello, ${user.login}!</b><br /><p>To verify your email, please use this link: <a href="${config.server.url + '/verify?token=' + user.token}">activation</a></p>`
        // };
        //
        // return new Promise((resolve, reject) => {
        //     transporter.sendMail(mailOptions, (error, info) => {
        //         if (error) {
        //             console.log(error);
        //             return reject(error);
        //         }
        //         return resolve('Message sent: ' + info.response);
        //     });
        // });
        return Promise.resolve();
    }
};
