const mongoose = require('mongoose');


mongoose
.connect("mongodb://localhost:27017/scatch")
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log("this is where it is going")
    console.log(err);
})

// this will give you whole control of db cache which you are exporting now
module.exports = mongoose.connection;