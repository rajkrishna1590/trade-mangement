const {
	SuccessResult,
	FailureResult,
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const stockContext = require('../../db/stock/stockContext');
const tradeContext = require('../../db/trade/tradeContext');
const utils = require('../../common/utils');

module.exports = function stockTradePriceRangeController(context) {
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

	async function getStockTradePriceRange(payload) {
		const tradeQuery = payload;
		logger.debug('getStockTradePriceRange calling', payload);
		const stockData = await stockContext.getStockBySymbol(payload.symbol);
		if (!stockData) {
			return new FailureResult({
				message: 'stock does not exist',
				messageCode: 'STOCK_NOT_FOUND'
			});
		}
		const isSymbolExist = await tradeContext.isTradeExistsForSymbol(payload.symbol);
		if (!isSymbolExist) {
			return new FailureResult({
				message: 'trade does not exist',
				messageCode: 'TRADE_NOT_FOUND'
			});
		}

		tradeQuery.start = utils.convertDateTimeByTimeZone(payload.start, 'America/Halifax');
		tradeQuery.end = utils.convertDateTimeByTimeZone(payload.end, 'America/Halifax');
		return tradeContext.getStockTradePriceRange(tradeQuery)
			.then((data) => {
				if (data.length === 0) {
					return new SuccessResult({
						message: 'There are no trades in the given date range',
						messageCode: 'TRADE_NOT_FOUND_IN_FILTER'
					});
				}
				const retData = {
					symbol: payload.symbol,
					highest: data[0].max,
					lowest: data[0].min
				};
				return new SuccessResult(retData);
			})
			.catch(e => new FailureResult(e));
	}
	return {
		getStockTradePriceRange
	};
};