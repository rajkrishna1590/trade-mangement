const {
	SuccessResult,
	FailureResult,
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const tradeContext = require('../../db/trade/tradeContext');
const userContext = require('../../db/user/userContext');

module.exports = function userTradeListController(context) {
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

	async function getUserTradeList(userId) {
		const userData = await userContext.getUserById(userId);
		if (!userData) {
			return new FailureResult({
				message: 'user does not exist',
				messageCode: 'USER_NOT_FOUND'
			});
		}
		logger.debug('getUserTradeList calling', userId);
		return tradeContext.getUserTradeList(userId)
			.then(data => new SuccessResult(data))
			.catch(e => new FailureResult(e));
	}
	return {
		getUserTradeList
	};
};