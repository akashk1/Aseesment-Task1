const mongoose = require("mongoose");
const Admin = mongoose.mongo.Admin;
const url =
  "mongodb+srv://test123:test123@cluster0.snlcs.mongodb.net/InsuredMineDB?retryWrites=true&w=majority";

mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

module.exports = connection;
