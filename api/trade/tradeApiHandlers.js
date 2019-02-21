/*  eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["result"] }] */
const apiConstants = require('../../constants/apiConstants');
const schema = require('./schema');
const {
	Logger,
	LOGGER_CONSTANTS
} = require('../../common/logger');

const logger = Logger(LOGGER_CONSTANTS.API);

/**
 * get list of trades record
 * @param {*} tradeListHandler
 */
const tradeListHandler = tradeListController => function apiHandler(req, callback) {
	const pageParam = {};
	logger.debug();
	tradeListController.getTradeList(pageParam).then((result) => {
		if (result.isSuccess()) {
			callback(apiConstants.CONSTANTS.EMPTY, result);
		} else {
			callback(result.error);
		}
	});
};
/**
 * delete all trades record
 * @param {*} tradeListHandler
 */
const deleteAlltradeHandler = deleteAllController => function apiHandler(req, callback) {
	logger.debug();
	deleteAllController.deleteAllTrade().then((result) => {
		if (result.isSuccess()) {
			callback(apiConstants.CONSTANTS.EMPTY, result);
		} else {
			callback(result.error);
		}
	});
};
module.exports = {
	routes: [{
		method: 'get',
		apiHandler: tradeListHandler,
		description: 'Get the list of trades',
		path: '/trades',
		controller: 'controllers.trade.tradeListController',
		inputs: schema
	}, {
		method: 'delete',
		apiHandler: deleteAlltradeHandler,
		description: 'Get the list of trades',
		path: '/trades',
		controller: 'controllers.trade.deleteAllController',
		inputs: schema
	}]
};