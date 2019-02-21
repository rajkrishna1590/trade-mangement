const tradeListController = require('./trade/tradeListController');
const deleteAllTradeController = require('./trade/deleteAllTradeController');
const createTradeController = require('./trade/createTradeController');

module.exports = {
	trade: {
		tradeListController,
		deleteAllTradeController,
		createTradeController
	}
};