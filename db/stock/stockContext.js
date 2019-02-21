const {
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const Model = require('../../models/model');

function StockContext() {
	const stockModel = new Model('stock');
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER);

	function getStockList() {
		return stockModel.find({}, {}, {})
			.then((res) => {
				logger.debug('result get all stocks :: ', res);
				return res;
			})
			.catch((e) => {
				throw e;
			});
	}

	function getStockBySymbol(symbol) {
		return stockModel.findOne({
			symbol
		}, {})
			.then((res) => {
				logger.debug('result get stock by symbol :: ', res);
				return res;
			})
			.catch((e) => {
				throw e;
			});
	}

	return {
		getStockBySymbol,
		getStockList
	};
}

module.exports = new StockContext();