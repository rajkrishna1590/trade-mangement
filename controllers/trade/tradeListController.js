const {
	SuccessResult,
	FailureResult,
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const tradeContext = require('../../db/trade/tradeContext');


module.exports = function getTradeListController(context) {
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

	function getTradeList() {
		logger.debug('getTradeList calling');
		return tradeContext.getTradeList()
			.then(data => new SuccessResult(data))
			.catch(e => new FailureResult(e));
	}
	return {
		getTradeList
	};
};