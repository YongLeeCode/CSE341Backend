var express = require("express");
var app = express();

app.use("/firstname", require("./routes/index"))
   .listen(5000, () =>{
    console.log(`server is running on port 5000`);
});