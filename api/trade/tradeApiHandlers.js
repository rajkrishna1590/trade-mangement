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
	logger.debug('get all');
	tradeListController.getTradeList().then((result) => {
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
	logger.debug('delete all trades');
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
	logger.debug('create trade', req.body);

	createTradeController.createTrade(req.body).then((result) => {
		if (result.isSuccess()) {
			callback(apiConstants.CONSTANTS.EMPTY, result, {}, HTTP_RESPONSES.CREATED.code);
		} else {
			callback(result.error, result.error, {}, HTTP_RESPONSES.BAD_REQUEST.code);
		}
	});
};

/**
 * get list of trades for the user
 * @param {*} userTradeListHandler
 */
const userTradeListHandler = userTradeListController => function apiHandler(req, callback) {
	logger.debug('get all trades for the user', req.params);
	userTradeListController.getUserTradeList(req.params.userId).then((result) => {
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
		apiHandler: tradeListHandler,
		description: 'Get the list of trades',
		path: '/trades',
		controller: 'controllers.trade.tradeListController',
		inputs: {}
	}, {
		method: 'get',
		apiHandler: userTradeListHandler,
		description: 'Get the user list trades',
		path: '/trades/users/:userId',
		controller: 'controllers.trade.userTradeListController',
		inputs: schema.GET_USER_TRADE
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