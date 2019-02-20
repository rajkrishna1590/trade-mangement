const {
    SuccessResult,
    // FailureResult,
    Logger,
    LOGGER_CONSTANTS
} = require('../../common');

module.exports = function vmCloneController(context) {
    const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

    function getTradeList(payload) {
        logger.debug('test', payload);
        return new SuccessResult([]);
    }
    return {
        getTradeList
    };
};