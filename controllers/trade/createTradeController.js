const {
	SuccessResult,
	FailureResult,
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const tradeContext = require('../../db/trade/tradeContext');
const Trade = require('../../models/trade');


module.exports = function createTradeController(context) {
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

	async function createTrade(payload) {
		const trade = new Trade(payload.id, payload.type, payload.user, payload.symbol, payload.shares, payload.price);
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