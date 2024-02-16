let mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/Zomato",
  console.log("Mongoose is connected")
);
