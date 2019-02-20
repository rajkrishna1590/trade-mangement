const tradeApiHandlers = require('./tradeApiHandlers');

module.exports = {
    routes: [
        ...tradeApiHandlers.routes
    ]
};