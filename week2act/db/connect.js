const dotenv = require("dotenv");
dotenv.config();
const MongoClient = require("mongodb").MongoClient;
let _db;
const initDb = (callback) => {
    if(_db){
        console.log("DB is initionalized");
        return callback(null, _db);
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client)=>{
            _db = client;
            callback(null, _db);
        })
        .catch((err) =>{
            callback(err);
        });
};

const getDb = () => {
    if(!_db) {
        throw Error("db is not initionalized");
    }
    return _db;
}

module.exports = {initDb, getDb};