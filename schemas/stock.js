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
module.exports = {
	CREATE_STOCK
};