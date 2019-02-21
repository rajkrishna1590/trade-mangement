const {
	SuccessResult,
	FailureResult,
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const tradeContext = require('../../models/trade/tradeContext');


module.exports = function deleteAllTradeController(context) {
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

	function deleteAllTrade() {
		logger.debug('delete all trades');
		return tradeContext.deleteAllTrade()
			.then(data => new SuccessResult(data))
			.catch(e => new FailureResult(e));
	}
	return {
		deleteAllTrade
	};
};