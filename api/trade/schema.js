module.exports = {
	'in-query': {
		name: 'Body Params',
		schema: {
			required: true,
			type: 'object',
			properties: {
				name: {
					required: true,
					pattern: '^[A-Za-z0-9_.-]*$',
					type: 'string',
					maxLength: 50
				}
			}
		}
	}
};