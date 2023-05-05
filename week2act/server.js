var express = require("express");
var app = express();
//cors(Cross-Origin Resource Sharing)는 출처가 다른 자원들을 공유한다는 뜻, 
//한 출처에 있는 자원에서 다른 출처에 있는 자원에 접근하도록 하는 개념. 
//교차되는 출처 자원들의 공유. 
//다른 출처에 있는 자원을 요청한다고 하면, 이를 교차 출처 요청이라고 부름.
var cors = require("cors");
const mongodb = require("./db/connect");
const port = process.env.PORT || 9999;
const routes = require('./routes/index.js');

app.use(cors());
app.use("/", routes);

mongodb.initDb((err) =>{
    if(err){
        console.log(err);
    }
    else{
        app.listen(port);
        console.log(`Server is running on port ${port}`);
    }
})