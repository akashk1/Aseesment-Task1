const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserAccountSchema = Schema({
  id: { type: Number, unique: true, required: true },
  account_name: { type: String, required: true },
  account_type: { type: String, required: true },
});
module.exports = mongoose.model("UsersAccount", UserAccountSchema);
