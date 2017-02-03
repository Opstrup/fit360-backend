const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');
const helmet = require('helmet');
const colors = require('colors');
const app = express();
const bodyParser = require('body-parser');
const config = require('../config');

mongoose.connect(config.mongo.url);

app.use(bodyParser.json());
app.use(helmet());
app.use((request, response, next) => {
    request.timeStamp = moment().format("h:mm:ss a");
    console.log(colors.green(request.method) + ' .:. ' + colors.yellow(request.url) + ' .:. ' + ' ~~~~~ ' + colors.cyan.underline(request.timeStamp));
    next();
});

// Error handler middleware
// Important this is the last function in the middleware chain
app.use((err, request, response, next) => {
    console.log(colors.magenta(request.method) + ' .:. ' + colors.yellow(request.url) + ' .:. ' + ' ~~~~~ ' + colors.cyan.underline(request.timeStamp));
    console.log(err .red);
    response.status(500).send('Something broke!')
});

require('./user').init(app);

module.exports = app;