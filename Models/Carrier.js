const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const carrierSchema = Schema({
  id: { type: Number, unique: true, required: true },
  company_name: { type: String, required: true },
});
module.exports = mongoose.model("Carrier", carrierSchema);
