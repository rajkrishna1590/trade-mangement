const validator = require('is-my-json-valid');

const schema = require('../schemas/trade');

class Trade {
	constructor(id = '', type = '', user = {}, symbol = '', shares = '', price = 0, timestamp = '') {
		this.data = {};
		this.schema = schema.CREATE_TRADE;
		this.data.id = id;
		this.data.type = type;
		this.data.user = {
			id: user.id,
			name: user.name
		};
		this.data.symbol = symbol;
		this.data.shares = shares;
		this.data.price = price;
		this.data.timestamp = timestamp;
		this.valdiator = validator(this.schema);
	}

	validate(newData) {
		return this.valdiator(newData || this.data);
	}
}
module.exports = Trade;