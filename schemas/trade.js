const CREATE_TRADE = {
	'in-body': {
		name: 'Body Params',
		schema: {
			required: true,
			type: 'object',
			properties: {
				id: {
					required: true,
					type: 'string',
					maxLength: 50
				},
				type: {
					required: true,
					type: 'string',
					enum: ['buy', 'sell'],
					maxLength: 4
				},
				user: {
					required: true,
					type: 'object',
					properties: {
						id: {
							required: true,
							type: 'string',
							maxLength: 50
						},
						name: {
							required: true,
							type: 'string',
							maxLength: 50
						}
					}
				},
				symbol: {
					required: true,
					type: 'string',
					maxLength: 15
				},
				shares: {
					required: true,
					type: 'number',
					minimum: 10,
					maximum: 30
				},
				price: {
					required: true,
					type: 'number',
					maxLength: 15
				},
				timestamp: {
					required: true,
					type: 'string',
					pattern: /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/
				}
			}
		}
	}
};
const GET_USER_TRADE = {
	'in-path': {
		name: 'Body Params',
		schema: {
			required: true,
			type: 'object',
			properties: {
				userId: {
					required: true,
					type: 'string',
					maxLength: 50
				}
			}
		}
	}
};
module.exports = {
	CREATE_TRADE,
	GET_USER_TRADE
};