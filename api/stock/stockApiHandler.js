/*  eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["result"] }] */
const apiConstants = require('../../constants/apiConstants');
const {
	Logger,
	LOGGER_CONSTANTS
} = require('../../common/logger');

const logger = Logger(LOGGER_CONSTANTS.API);
const {
	HTTP_RESPONSES
	// ERROR_CODES
} = require('../../constants/apiConstants');
/**
 * get list of stocks record
 * @param {*} stockListHandler
 */
const stockListHandler = stockListController => function apiHandler(req, callback) {
	logger.debug('get all stock');
	stockListController.getStockList().then((result) => {
		if (result.isSuccess()) {
			callback(apiConstants.CONSTANTS.EMPTY, result, {}, HTTP_RESPONSES.SUCCESS.code);
		} else {
			callback(result.error);
		}
	});
};
module.exports = {
	routes: [{
		method: 'get',
		apiHandler: stockListHandler,
		description: 'Get the list of stock',
		path: '/stocks',
		controller: 'controllers.stock.stockListController',
		inputs: {}
	}]
};