const swaggerUi = require('swagger-ui-express');
// const bodyParser = require('body-parser');
const tradeAPIs = require('./trade-api-docs');
const swaggerDocument = require('./swagger-config.json');

swaggerDocument.paths = tradeAPIs;
// const { paths, definitions } = require('./docs/');

// Temp fixs untill api-docs.json is deprecated
// swaggerDocument.paths = { ...swaggerDocument.paths, ...paths };
// swaggerDocument.def = { ...swaggerDocument.paths, ...definitions };


module.exports = {
	url: '/api-docs',
	swaggerUi,
	swaggerDocument
};