const validator = require('is-my-json-valid');

const schema = require('../schemas/stock');

class Stock {
	constructor(companyName = '', symbol = '', marketCategory) {
		this.data = {};
		this.schema = schema.CREATE_STOCK;
		this.data.companyName = companyName;
		this.data.marketCategory = marketCategory;
		this.data.symbol = symbol;
		this.valdiator = validator(this.schema);
	}

	validate(newData) {
		return this.valdiator(newData || this.data);
	}
}
module.exports = Stock;