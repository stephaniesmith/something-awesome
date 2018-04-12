const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017/somethingAwesome';
let client = null;
MongoClient.connect(url)
    .then(_client => {
        client = _client;
        const db = client.db();
        return db.collection('unicorns')
            // .find()
            // .toArray();
            .update({
                _id: ObjectId("5acfd83439e3c4fae656cc3b"),
            }, {
                $set: {
                    toy: 'sparklers'
                }   
            });
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