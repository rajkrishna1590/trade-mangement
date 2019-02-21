const CREATE_USER = {
	'in-body': {
		name: 'Body Params',
		schema: {
			required: true,
			type: 'object',
			properties: {
				userId: {
					required: true,
					type: 'string',
					maxLength: 50
				},
				userName: {
					required: true,
					type: 'string',
					maxLength: 50
				},
				password: {
					required: true,
					type: 'string',
					maxLength: 50
				}
			}
		}
	}
};

module.exports = {
	CREATE_USER
};