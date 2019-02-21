const {
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const Model = require('../../models/model');

function TradeContext() {
	const tradeModel = new Model('trade');
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER);

	function getTradeList() {
		return tradeModel.find({}, {}, {
			id: 1
		})
			.then((res) => {
				logger.debug('result get all trades :: ', res);
				return res;
			})
			.catch((e) => {
				throw e;
			});
	}

	function getTradeById(id) {
		return tradeModel.findOne({
			id
		}, {})
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
				logger.debug('delete all trades records count :: ', res.n);
				return res;
			})
			.catch((e) => {
				throw e;
			});
	}

	function createTrade(trade) {
		return tradeModel.insert(trade)
			.then((res) => {
				logger.debug('create trade :: ', res.result.n);
				return res;
			})
			.catch((e) => {
				throw e;
			});
	}

	function getUserTradeList(userId) {
		return tradeModel.find({
			'user.id': userId
		}, {}, {
			id: 1
		})
			.then((res) => {
				logger.debug('result get all user trades :: ', res);
				return res;
			})
			.catch((e) => {
				throw e;
			});
	}
	return {
		getTradeList,
		deleteAllTrade,
		createTrade,
		getTradeById,
		getUserTradeList
	};
}

module.exports = new TradeContext();