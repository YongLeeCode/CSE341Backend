
const mongodb = require("../db/connect.js");

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().db("CSE341").collection('professional').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]); // we just need the first one (the only one)
    });
  };

// const getData = async (req, res, next) => {
//     const result = await mongodb
//         .getDb()
//         .db("cse341")
//         .collection("professional")
//         .findone();
//     res.setHeader("content-Type", "application/json");
//     res.status(200).json(result);

// };

module.exports = { getData };