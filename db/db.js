const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;

const {
    Logger,
    LOGGER_CONSTANTS
} = require('../common');

const logger = Logger(LOGGER_CONSTANTS.DB);
let db = null;

const connectSync = (
    dbOptions,
    dbName
) => new Promise((res) => {
    dbOptions.connect((err, client) => {
        if (client == null) {
            throw err;
        }
        const dbConnection = client.db(dbName).admin();
        res(dbConnection);
    });
});

module.exports = async function connectDB(ip, port, dbName) {
    const mongoclient = new MongoClient(new Server(ip, port), {
        native_parser: true
    });

    if (db !== null) {
        return db;
    }
    const url = `mongodb://${ip}:${port}`;
    logger.debug(`connecting db ${url}`);
    db = await connectSync(mongoclient, dbName);
    return db;
};