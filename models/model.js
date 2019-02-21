const dbConnection = require('../db');


const db = dbConnection.connectDB();


const {
	Logger,
	LOGGER_CONSTANTS
} = require('../common');

const logger = Logger(LOGGER_CONSTANTS.DB);

class Model {
	constructor(collectionName) {
		this.collectionName = collectionName;
	}

	insert(data) {
		const collection = db.collection(this.collectionName);
		return new Promise((resolve, reject) => {
			collection.insertOne(data)
				.then((res) => {
					resolve(res);
				})
				.catch((e) => {
					logger.error({
						func: 'insert',
						mesg: e
					});
					const error = new Error(e);
					reject(error);
				});
		});
	}

	update(filter, newData, option) {
		const collection = db.collection(this.collectionName);
		return new Promise((resolve, reject) => {
			collection.update(filter, newData, option)
				.then((res) => {
					resolve(res);
				})
				.catch((e) => {
					logger.error({
						func: 'update',
						mesg: e
					});
					const error = new Error(e);
					reject(error);
				});
		});
	}

	remove(data) {
		const collection = db.collection(this.collectionName);
		return new Promise((resolve, reject) => {
			collection.remove(data)
				.then((res) => {
					resolve(res);
				})
				.catch((e) => {
					logger.error({
						func: 'remove',
						mesg: e
					});
					const error = new Error(e);
					reject(error);
				});
		});
	}

	find(filter, option = {}, sort = {}) {
		const collection = db.collection(this.collectionName);
		return new Promise((resolve, reject) => {
			collection.find(filter, option).sort(sort).toArray((e, res) => {
				if (e) {
					logger.error({
						func: 'find',
						mesg: e
					});
					const error = new Error(e);
					reject(error);
				}
				resolve(res);
			});
		});
	}

	findOne(filter, option) {
		const collection = db.collection(this.collectionName);
		return new Promise((resolve, reject) => {
			collection.findOne(filter, (e, res) => {
				if (e) {
					logger.error({
						func: 'findOne',
						mesg: e
					});
					const error = new Error(e);
					reject(error);
				}
				resolve(res);
			});
		});
	}
}
module.exports = Model;