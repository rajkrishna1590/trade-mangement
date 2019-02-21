const tradeApiHandlers = require('./trade');
const userApiHandlers = require('./user');
const stockApiHandlers = require('./stock');

module.exports = {
	'trade-management': tradeApiHandlers,
	'user-management': userApiHandlers,
	'stock-management': stockApiHandlers
};