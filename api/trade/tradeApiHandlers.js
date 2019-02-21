/*  eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["result"] }] */
const apiConstants = require('../../constants/apiConstants');
const schema = require('../../schemas/trade');
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
 * get list of trades record
 * @param {*} tradeListHandler
 */
const tradeListHandler = tradeListController => function apiHandler(req, callback) {
	const pageParam = {};
	logger.debug('get all');
	tradeListController.getTradeList(pageParam).then((result) => {
		if (result.isSuccess()) {
			callback(apiConstants.CONSTANTS.EMPTY, result, {}, HTTP_RESPONSES.SUCCESS.code);
		} else {
			callback(result.error);
		}
	});
};
/**
 * delete all trades record
 * @param {*} deleteAllTradeHandler
 */
const deleteAllTradeHandler = deleteAllTradeController => function apiHandler(req, callback) {
	logger.debug();
	deleteAllTradeController.deleteAllTrade().then((result) => {
		if (result.isSuccess()) {
			callback(apiConstants.CONSTANTS.EMPTY, result, {}, HTTP_RESPONSES.SUCCESS.code);
		} else {
			callback(result.error);
		}
	});
};
/**
 * create trade record
 * @param {*} createTradeHandler
 */
const createTradeHandler = createTradeController => function apiHandler(req, callback) {
	logger.debug(req.body);
	createTradeController.createTrade(req.body).then((result) => {
		if (result.isSuccess()) {
			callback(apiConstants.CONSTANTS.EMPTY, result, {}, HTTP_RESPONSES.CREATED.code);
		} else {
			callback(result.error, result.error, {}, HTTP_RESPONSES.BAD_REQUEST.code);
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
		inputs: {}
	}, {
		method: 'post',
		apiHandler: createTradeHandler,
		description: 'create trades',
		path: '/trades',
		controller: 'controllers.trade.createTradeController',
		inputs: schema.CREATE_TRADE
	}, {
		method: 'delete',
		apiHandler: deleteAllTradeHandler,
		description: 'delete all trades',
		path: '/erase-trades',
		controller: 'controllers.trade.deleteAllTradeController',
		inputs: {}
	}]
};