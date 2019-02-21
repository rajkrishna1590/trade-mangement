const {
	SuccessResult,
	FailureResult,
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const tradeContext = require('../../db/trade/tradeContext');


module.exports = function userTradeListController(context) {
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

	function getUserTradeList(userId) {
		logger.debug('getUserTradeList calling', userId);
		return tradeContext.getUserTradeList(userId)
			.then(data => new SuccessResult(data))
			.catch(e => new FailureResult(e));
	}
	return {
		getUserTradeList
	};
};