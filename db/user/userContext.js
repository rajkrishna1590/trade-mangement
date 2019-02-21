const {
	Logger,
	LOGGER_CONSTANTS
} = require('../../common');
const Model = require('../../models/model');

function UserContext() {
	const userModel = new Model('user');
	const logger = Logger(LOGGER_CONSTANTS.CONTROLLER);

	function getUserList() {
		return userModel.find({}, {}, {})
			.then((res) => {
				logger.debug('result get all users :: ', res);
				return res;
			})
			.catch((e) => {
				throw e;
			});
	}

	function getUserById(userId) {
		return userModel.findOne({
			userId
		}, {})
			.then((res) => {
				logger.debug('result get user by id :: ', res);
				return res;
			})
			.catch((e) => {
				throw e;
			});
	}

	return {
		getUserById,
		getUserList
	};
}

module.exports = new UserContext();