/*  eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["result"] }] */
const apiConstants = require('../../constants/apiConstants');
const {
	Logger,
	LOGGER_CONSTANTS
} = require('../../common/logger');
const schema = require('../../schemas/stock');

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
/**
 * get list of trade record for the symbol
 * @param {*} stockTradeListHandler
 */
const stockTradeListHandler = stockTradeListController => function apiHandler(req, callback) {
	const payload = {
		...req.params,
		...req.query
	};
	logger.debug('get all trade for the symbol', payload);

	stockTradeListController.getStockTradeList(payload).then((result) => {
		if (result.isSuccess()) {
			callback(apiConstants.CONSTANTS.EMPTY, result, {}, HTTP_RESPONSES.SUCCESS.code);
		} else {
			callback(result.error);
		}
	});
};
/**
 * get list of trade record for the symbol with min & max price
 * @param {*} stockTradePriceRangeHandler
 */
const stockTradePriceRangeHandler = stockTradePriceRangeController => function apiHandler(req, callback) {
	const payload = {
		...req.params,
		...req.query
	};
	logger.debug('get all trade for the symbol with price range', payload);

	stockTradePriceRangeController.getStockTradePriceRange(payload).then((result) => {
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
	}, {
		method: 'get',
		apiHandler: stockTradeListHandler,
		description: 'Get the list of stock',
		path: '/stocks/:symbol/trades',
		controller: 'controllers.stock.stockTradeListController',
		inputs: schema.STOCK_TRADE
	}, {
		method: 'get',
		apiHandler: stockTradePriceRangeHandler,
		description: 'Get the list of stock',
		path: '/stocks/:symbol/price',
		controller: 'controllers.stock.stockTradePriceRangeController',
		inputs: schema.STOCK_TRADE_PRICE
	}]
};