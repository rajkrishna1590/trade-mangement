const MongoClient = require('mongodb').MongoClient;
// const Server = require('mongodb').Server;

const {
	Logger,
	LOGGER_CONSTANTS
} = require('../common');

const logger = Logger(LOGGER_CONSTANTS.DB);
let db = null;

const connectSync = (ip, port, dbName) => new Promise((res) => {
	if (db !== null) {
		res(db);
	}
	// const mongoclient = new MongoClient(new Server(ip, port), {
	// 	native_parser: true
	// });
	const url = `mongodb://trade:trade123@${ip}:${port}`;
	MongoClient.connect(url, (err, client) => {
		if (client == null) {
			throw err;
		}
		const dbConnection = client.db(dbName);
		db = dbConnection;
		res(db);
	});
});
// async function test(ip, port, dbName) {
// 	db = await connectSync(ip, port, dbName);
// 	return db;
// }
module.exports = function connectDB(ip = '', port = '', dbName = '') {
	if (db !== null) {
		logger.debug('already db connected');
		return db;
	}
	return connectSync(ip, port, dbName);
};