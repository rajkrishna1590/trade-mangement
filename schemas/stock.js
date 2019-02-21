const CREATE_STOCK = {
	'in-body': {
		name: 'Body Params',
		schema: {
			required: true,
			type: 'object',
			properties: {
				companyName: {
					required: true,
					type: 'string',
					maxLength: 50
				},
				symbol: {
					required: true,
					type: 'string',
					enum: ['buy', 'sell'],
					maxLength: 4
				},
				marketCategory: {
					required: true,
					type: 'string',
					maxLength: 15
				}
			}
		}
	}
};
const STOCK_TRADE = {
	'in-path': {
		name: 'path Params',
		schema: {
			required: true,
			type: 'object',
			properties: {
				symbol: {
					required: true,
					type: 'string',
					maxLength: 15
				}

			}
		}
	},
	'in-query': {
		name: 'query Params',
		schema: {
			required: true,
			type: 'object',
			properties: {
				type: {
					required: true,
					type: 'string',
					enum: ['buy', 'sell'],
					maxLength: 4
				},
				start: {
					required: true,
					type: 'string',
					pattern: /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/
				},
				end: {
					required: true,
					type: 'string',
					pattern: /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/
				}
			}
		}
	}
};
const STOCK_TRADE_PRICE = {
	'in-path': {
		name: 'path Params',
		schema: {
			required: true,
			type: 'object',
			properties: {
				symbol: {
					required: true,
					type: 'string',
					maxLength: 15
				}

			}
		}
	},
	'in-query': {
		name: 'query Params',
		schema: {
			required: true,
			type: 'object',
			properties: {
				start: {
					required: true,
					type: 'string',
					pattern: /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/
				},
				end: {
					required: true,
					type: 'string',
					pattern: /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/
				}
			}
		}
	}
};
module.exports = {
	CREATE_STOCK,
	STOCK_TRADE,
	STOCK_TRADE_PRICE
};