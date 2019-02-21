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
					const error = new Error({
						error: e,
						code: 'DB_ERROR_001',
						type: 'app'
					});
					reject(error);
				});
		});
	}

	update(filter, newData, option) {
		return new Promise((resolve, reject) => {
			this.collectionn.update(filter, newData, option)
				.then((res) => {
					resolve(res);
				})
				.catch((e) => {
					logger.error({
						func: 'update',
						mesg: e
					});
					const error = new Error({
						error: e,
						code: 'DB_ERROR_002',
						type: 'app'
					});
					reject(error);
				});
		});
	}

	remove(data) {
		return new Promise((resolve, reject) => {
			this.collectionn.remove(data)
				.then((res) => {
					resolve(res);
				})
				.catch((e) => {
					logger.error({
						func: 'remove',
						mesg: e
					});
					const error = new Error({
						error: e,
						code: 'DB_ERROR_003',
						type: 'app'
					});
					reject(error);
				});
		});
	}

	find(filter, option) {
		const collection = db.collection(this.collectionName);
		return new Promise((resolve, reject) => {
			collection.find(filter, option).toArray((e, res) => {
				if (e) {
					logger.error({
						func: 'find',
						mesg: e
					});
					const error = new Error({
						error: e,
						code: 'DB_ERROR_004',
						type: 'app'
					});
					reject(error);
				}
				resolve(res);
			});
		});
	}

	findOneBySort(filter, sort) {
		return new Promise((resolve, reject) => {
			this.collectionn.find(filter).sort(sort).lean().exec()
				.then((res) => {
					resolve(res);
				})
				.catch((e) => {
					logger.error({
						func: 'findOneBySort',
						mesg: e
					});
					const error = new Error({
						error: e,
						code: 'DB_ERROR_005',
						type: 'app'
					});
					reject(error);
				});
		});
	}

	findOneBySortLimit(filter, option, sort, limit) {
		return new Promise((resolve, reject) => {
			this.collectionn.find(filter, option).sort(sort).limit(limit).lean()
				.exec()
				.then((res) => {
					resolve(res);
				})
				.catch((e) => {
					logger.error({
						func: 'findOneBySortLimit',
						mesg: e
					});
					const error = new Error({
						error: e,
						code: 'DB_ERROR_006',
						type: 'app'
					});
					reject(error);
				});
		});
	}

	findOneBySortSkipLimit(filter, option, sort, skip, limit) {
		return new Promise((resolve, reject) => {
			this.collectionn.find(filter, option).sort(sort).skip(skip).limit(limit)
				.lean()
				.exec()
				.then((res) => {
					resolve(res);
				})
				.catch((e) => {
					logger.error({
						func: 'findOneBySortSkipLimit',
						mesg: e
					});
					const error = new Error({
						error: e,
						code: 'DB_ERROR_007',
						type: 'app'
					});
					reject(error);
				});
		});
	}

	findOneAndUpdate(filter, newData, option) {
		return new Promise((resolve, reject) => {
			this.collectionn.findOneAndUpdate(filter, newData, option)
				.then((res) => {
					resolve(res);
				})
				.catch((e) => {
					logger.error({
						func: 'findOneAndUpdate',
						mesg: e
					});
					const error = new Error({
						error: e,
						code: 'DB_ERROR_008',
						type: 'app'
					});
					reject(error);
				});
		});
	}

	findWithColumn(filter, columns) {
		return new Promise((resolve, reject) => {
			this.collectionn.find(filter, columns).lean().exec()
				.then((res) => {
					resolve(res);
				})
				.catch((e) => {
					logger.error({
						func: 'findWithColumn',
						mesg: e
					});
					const error = new Error({
						error: e,
						code: 'DB_ERROR_009',
						type: 'app'
					});
					reject(error);
				});
		});
	}

	findOneWithColumnBySort(filter, columns, sort) {
		return new Promise((resolve, reject) => {
			this.collectionn.find(filter, columns).sort(sort).lean().exec()
				.then((res) => {
					resolve(res[0]);
				})
				.catch((e) => {
					logger.error({
						func: 'findOneWithColumnBySort',
						mesg: e
					});
					const error = new Error({
						error: e,
						code: 'DB_ERROR_010',
						type: 'app'
					});
					reject(error);
				});
		});
	}
}
module.exports = Model;