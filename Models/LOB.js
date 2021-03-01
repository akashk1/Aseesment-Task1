var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var LOBSchema = Schema({
  id: { type: Number, unique: true, required: true },
  category_tname: { type: String, required: true },
});
module.exports = mongoose.model("Lob", LOBSchema);
