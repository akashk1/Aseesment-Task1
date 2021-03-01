var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var userSchema = Schema({
  userId: { type: Number, unique: true, required: true },
  firstname: { type: String, required: true },
  dob: { type: String, required: true },
  address: { type: String, required: true },

  city: { type: String, required: true },
  phone: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  user_type: { type: String, required: true },
  userAccountId: { type: Number, required: true },
});
module.exports = mongoose.model("User", userSchema);
