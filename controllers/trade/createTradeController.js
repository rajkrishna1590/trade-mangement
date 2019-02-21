const {
	SuccessResult,
	FailureResult,
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const tradeContext = require('../../db/trade/tradeContext');
const userContext = require('../../db/user/userContext');
const stockContext = require('../../db/stock/stockContext');
const Trade = require('../../models/trade');


module.exports = function createTradeController(context) {
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

	async function createTrade(payload) {
		const userData = await userContext.getUserById(payload.user.id);
		if (!userData || userData.userName !== payload.user.name) {
			return new FailureResult({
				message: 'user does not exist',
				messageCode: 'USER_NOT_FOUND'
			});
		}
		const stockData = await stockContext.getStockBySymbol(payload.symbol);
		if (!stockData) {
			return new FailureResult({
				message: 'stock does not exist',
				messageCode: 'STOCK_NOT_FOUND'
			});
		}
		const trade = new Trade(payload.id, payload.type, payload.user, payload.symbol, payload.shares, payload.price, payload.timestamp);
		if (trade.validate()) {
			const dataRes = await tradeContext.getTradeById(trade.data.id);
			if (dataRes) {
				return new FailureResult({
					message: 'Trade already exist',
					messageCode: 'TRADE_EXIST'
				});
			}
			logger.debug('Create Trade', trade.data);
			return tradeContext.createTrade(trade.data)
				.then((data) => {
					const res = {
						count: data.result.n,
						message: 'Trade created'
					};
					return new SuccessResult(res);
				})
				.catch(e => new FailureResult(e));
		}
		return new FailureResult();
	}
	return {
		createTrade
	};
};