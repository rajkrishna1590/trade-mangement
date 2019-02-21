const {
	SuccessResult,
	FailureResult,
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const stockContext = require('../../db/stock/stockContext');
const tradeContext = require('../../db/trade/tradeContext');
const utils = require('../../common/utils');

module.exports = function stockTradeListController(context) {
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

	async function getStockTradeList(payload) {
		const tradeQuery = payload;
		logger.debug('getStockTradeList calling', payload);
		const stockData = await stockContext.getStockBySymbol(payload.symbol);
		if (!stockData) {
			return new FailureResult({
				message: 'stock does not exist',
				messageCode: 'STOCK_NOT_FOUND'
			});
		}
		tradeQuery.start = utils.convertDateTimeByTimeZone(payload.start, 'America/Halifax');
		tradeQuery.end = utils.convertDateTimeByTimeZone(payload.end, 'America/Halifax');
		return tradeContext.getStockTradeList(tradeQuery)
			.then(data => new SuccessResult(data))
			.catch(e => new FailureResult(e));
	}
	return {
		getStockTradeList
	};
};