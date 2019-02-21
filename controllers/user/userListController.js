const {
	SuccessResult,
	FailureResult,
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const userContext = require('../../db/user/userContext');


module.exports = function getUserListController(context) {
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

	function getUserList() {
		logger.debug('getUserList calling');
		return userContext.getUserList()
			.then(data => new SuccessResult(data))
			.catch(e => new FailureResult(e));
	}
	return {
		getUserList
	};
};