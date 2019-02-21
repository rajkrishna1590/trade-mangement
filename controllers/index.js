const tradeListController = require('./trade/tradeListController');
const deleteAllTradeController = require('./trade/deleteAllTradeController');
const createTradeController = require('./trade/createTradeController');
const userTradeListController = require('./trade/userTradeListController');

module.exports = {
	trade: {
		tradeListController,
		deleteAllTradeController,
		createTradeController,
		userTradeListController
	}
};