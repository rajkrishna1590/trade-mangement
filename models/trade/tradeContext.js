const {
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const Model = require('../model');

function TradeContext() {
	const tradeModel = new Model('trade');
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER);

	function getTradeList() {
		return tradeModel.find({}, {})
			.then((res) => {
				logger.debug('result get all trades :: ', res);
				return res;
			})
			.catch((e) => {
				throw e;
			});
	}

	function deleteAllTrade() {
		return tradeModel.remove({})
			.then((res) => {
				logger.debug('delete all trades :: ', res);
				return res;
			})
			.catch((e) => {
				throw e;
			});
	}
	return {
		getTradeList,
		deleteAllTrade
	};
}

module.exports = new TradeContext();