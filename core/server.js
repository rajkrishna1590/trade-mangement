const {
    Logger,
    LOGGER_CONSTANTS
} = require('../common');

const logger = Logger(LOGGER_CONSTANTS.SERVER);
const express = require('express');

const rootApp = express();
const http = require('http').Server(rootApp);
const bodyParser = require('body-parser');
const routeServiceProvider = require('./service/routeServiceProvider');

rootApp.use(bodyParser.json()); // to support JSON-encoded bodies
rootApp.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

module.exports = (eventEmittor, handlers, controllers) => (function expressServer() {
    routeServiceProvider(express.Router, eventEmittor).registerRoutes(rootApp, handlers, controllers);
    this.listen = function listenMain(port) {
        http.listen(port, (err) => {
            logger.debug(err || 'app running in ', http.address());
        });
    };
    return this;
}());