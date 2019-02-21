const request = require('supertest');
const bootstrap = require('./testMain');
describe('trade-management', () => {

    it('bootstrap application', (finaldone) => {
        bootstrap(app => {
            let getTime = new Date().getTime();
            console.log("bootstraped");
            describe('trade-management new trade', () => {
                it('create trade', (done) => {
                    request(app)
                        .post('/trade-mgmt-api/trade-management/trades')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .send({
                            "id": getTime.toString(),
                            "type": "buy",
                            "user": {
                                "id": "rajk",
                                "name": "Raj"
                            },
                            "symbol": "ADRU",
                            "shares": 11,
                            "price": 100.110,
                            "timestamp": "2019-02-20 08:21:15"
                        })
                        .expect('Content-Type', /json/)
                        .expect(201)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });
                })
            });

            describe('trade-management new trade', () => {
                it('create trade', (done) => {
                    request(app)
                        .post('/trade-mgmt-api/trade-management/trades')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .send({
                            "id": new Date().getTime().toString(),
                            "type": "sell",
                            "user": {
                                "id": "rajk",
                                "name": "Raj"
                            },
                            "symbol": "ADRU",
                            "shares": 11,
                            "price": 105.110,
                            "timestamp": "2019-02-24 08:21:15"
                        })
                        .expect('Content-Type', /json/)
                        .expect(201)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });
                })
            });

            describe('trade-management new trade', () => {
                it('create trade', (done) => {
                    request(app)
                        .post('/trade-mgmt-api/trade-management/trades')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .send({
                            "id": new Date().getTime().toString(),
                            "type": "buy",
                            "user": {
                                "id": "rajk",
                                "name": "Raj"
                            },
                            "symbol": "ADRU",
                            "shares": 11,
                            "price": 90.110,
                            "timestamp": "2019-02-21 08:21:15"
                        })
                        .expect('Content-Type', /json/)
                        .expect(201)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });
                })
            });

            describe('trade-management new trade', () => {
                it('create trade', (done) => {
                    request(app)
                        .post('/trade-mgmt-api/trade-management/trades')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .send({
                            "id": new Date().getTime().toString(),
                            "type": "buy",
                            "user": {
                                "id": "rajk",
                                "name": "Raj"
                            },
                            "symbol": "ADRU",
                            "shares": 11,
                            "price": 109.110,
                            "timestamp": "2019-02-22 08:28:15"
                        })
                        .expect('Content-Type', /json/)
                        .expect(201)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });
                })
            });


            describe('trade-management All trades', () => {
                it('get all trades  ', (done) => {
                    request(app)
                        .get('/trade-mgmt-api/trade-management/trades')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });

                })
            });

            describe('trade-management All user trades', () => {
                it('get all user trades  ', (done) => {
                    request(app)
                        .get('/trade-mgmt-api/trade-management/trades/users/rajk')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });
                })
            });
            describe('trade-management All user trades', () => {
                it('get all trades - faill 404  ', (done) => {
                    request(app)
                        .get('/trade-mgmt-api/trade-management/trades/users/rajk1')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(404)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });
                })
            });
            describe('trade-management new trade', () => {
                it('create trade', (done) => {
                    request(app)
                        .post('/trade-mgmt-api/trade-management/trades')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .send({
                            "id": getTime.toString(),
                            "type": "buy",
                            "user": {
                                "id": "rajk",
                                "name": "Raj"
                            },
                            "symbol": "ADRU",
                            "shares": 11,
                            "price": 100.110,
                            "timestamp": "2019-02-22 08:21:15"
                        })
                        .expect('Content-Type', /json/)
                        .expect(201)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });
                })
            });
            describe('trade-management new trade - unknown user', () => {
                it('create trade - failed', (done) => {
                    request(app)
                        .post('/trade-mgmt-api/trade-management/trades')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .send({
                            "id": getTime.toString() + '1',
                            "type": "buy",
                            "user": {
                                "id": "rajk1",
                                "name": "Raj"
                            },
                            "symbol": "ADRU",
                            "shares": 11,
                            "price": 100.110,
                            "timestamp": "2019-02-22 08:21:15"
                        })
                        .expect('Content-Type', /json/)
                        .expect(404)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });
                })
            });

            describe('trade-management create existing trade', () => {
                it('it should failed with 400', (done) => {
                    request(app)
                        .post('/trade-mgmt-api/trade-management/trades')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .send({
                            "id": getTime.toString(),
                            "type": "buy",
                            "user": {
                                "id": "rajk",
                                "name": "Raj"
                            },
                            "symbol": "ADRU",
                            "shares": 11,
                            "price": 100.110,
                            "timestamp": "2019-02-22 08:21:15"
                        })
                        .expect('Content-Type', /json/)
                        .expect(400)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });
                })
            });

            describe('trade-management symbol trade', () => {
                it('get price range', (done) => {
                    request(app)
                        .get('trade-mgmt-api/stock-management/stocks/ADRU/trades?type=sell&start=2019-02-21 07:20:15&end=2019-02-22 08:25:15')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });

                })
            });

            describe('trade-management :: get price range - invalid symbol stock', () => {
                it('it should fail', (done) => {
                    request(app)
                        .get('trade-mgmt-api/stock-management/stocks/ADRU1/trades?type=sell&start=2019-02-21 07:20:15&end=2019-02-22 08:25:15')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(404)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });

                }).timeout(10000)
            });

            describe('trade-management price range', () => {
                it('get price range', (done) => {
                    request(app)
                        .get('/trade-mgmt-api/stock-management/stocks/ADRU/price?start=2019-02-23 07:20:15&end=2019-02-24 08:21:15')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });

                })
            });

            describe('trade-management price range', () => {
                it('get price range', (done) => {
                    request(app)
                        .get('/trade-mgmt-api/stock-management/stocks/ADRU/price?start=2019-02-20 07:20:15&end=2019-02-24 08:21:15')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });

                })
            });

            describe('trade-management stock price range - symbol not found', () => {
                it(' stock price range - symbol not found - failed', (done) => {
                    request(app)
                        .get('/trade-mgmt-api/stock-management/stocks/ADRU1/price?start=2019-02-23 07:20:15&end=2019-02-24 08:21:15')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(404)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });

                })
            });

            describe('trade-management stock api', () => {
                it('stock list', (done) => {
                    request(app)
                        .get('/trade-mgmt-api/stock-management/stocks')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });

                })
            });

            describe('trade-management user api', () => {
                it('user list', (done) => {
                    request(app)
                        .get('/trade-mgmt-api/user-management/users')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });

                })
            });

            describe('trade-management erase All trades', () => {
                it('erase all trades', (done) => {
                    request(app)
                        .delete('/trade-mgmt-api/trade-management/erase-trades')
                        .set("Authorization", "Basic cmFqOnJhag==")
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .end(function (err, res) {
                            if (err) throw err;
                            done()

                        });

                })
            });
            describe('App exit', () => {
                it('exited', (done) => {
                    setTimeout(() => {
                        done()
                        finaldone()
                        process.exit();
                    }, 1000);
                })
            })


        })
    }).timeout(20000)

})