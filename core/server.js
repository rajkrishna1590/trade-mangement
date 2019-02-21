const {
	Logger,
	LOGGER_CONSTANTS
} = require('../common');
const swaggerConfig = require('../swagger');

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
// To serve swagger documention
rootApp.use(swaggerConfig.url, swaggerConfig.swaggerUi.serve, swaggerConfig.swaggerUi.setup(swaggerConfig.swaggerDocument));

module.exports = (eventEmittor, handlers, controllers) => (function expressServer() {
	routeServiceProvider(express.Router, eventEmittor).registerRoutes(rootApp, handlers, controllers);
	this.listen = function listenMain(port, callback = () => {}) {
		http.listen(port, (err) => {
			logger.debug(err || 'app running in ', http.address());
			callback(rootApp, http); // for testcases
		});
	};
	return this;
}());