const mongodb = require('mongodb');
const { MongoClient } = mongodb;
const chalk = require('chalk');

let _db;

const mongoConnect = ( callback ) => {
    MongoClient.connect('mongodb+srv://Robert:Xybjvs444RHx3Bir@cluster1-n2dac.mongodb.net/test?retryWrites=true&w=majority')
        .then((client) => {
            console.log(chalk.green('Connection to MongoDB Successful!'))
            _db = client.db();
            callback()
            
        }).catch((err) => {
            console.log('Unable to connnect', err)
        });
}

const getDb = () =>{
    if(_db){
        return _db;
    }
    throw 'No Database Found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
