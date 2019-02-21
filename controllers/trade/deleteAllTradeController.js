const {
	SuccessResult,
	FailureResult,
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const tradeContext = require('../../db/trade/tradeContext');


module.exports = function deleteAllTradeController(context) {
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

	function deleteAllTrade() {
		logger.debug('delete all trades');
		return tradeContext.deleteAllTrade()
			.then((data) => {
				const res = {
					count: data.result.n,
					message: 'Trade(s) deleted'
				};
				return new SuccessResult(res);
			})
			.catch(e => new FailureResult(e));
	}
	return {
		deleteAllTrade
	};
};