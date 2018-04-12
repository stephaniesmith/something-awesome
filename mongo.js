const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/somethingAwesome';
let client = null;
MongoClient.connect(url)
    .then(_client => {
        client = _client;
        const db = client.db();
        return db.collection('unicorns')
            .find()
            .toArray();
    })
    .then(unicorns => {
        console.log(
            JSON.stringify(unicorns, true, 2)
        );
    })
    .catch(err => {
        console.log('FAIL!', err);
    })
    .then(() => {
        client.close();
    });