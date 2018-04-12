const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/test';
let db = null;
MongoClient.connect(url)
    .then(_db => {
        db = _db;
        //
    })
    .catch(err => {
        console.log('FAIL!', err);
    })
    .then(() => {
        db.close();
    });