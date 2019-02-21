const validator = require('is-my-json-valid');

const schema = require('../schemas/user');

class Trade {
	constructor(userId = '', userName = '', password = '') {
		this.data = {};
		this.schema = schema.CREATE_USER;
		this.data.userId = userId;
		this.data.userName = userName;
		this.data.password = password;
		this.valdiator = validator(this.schema);
	}

	validate(newData) {
		return this.valdiator(newData || this.data);
	}
}
module.exports = Trade;