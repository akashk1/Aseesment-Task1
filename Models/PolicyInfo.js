var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var PolicySchema = Schema({
  id: { type: Number, unique: true, required: true },
  policy_number: { type: String, required: true },
  policy_start_data: { type: String, required: true },
  policy_end_date: { type: String, required: true },
  category_name: { type: String, required: true },
  company_id: { type: Number, required: true },
  user_id: { type: Number, required: true },
});
module.exports = mongoose.model("Policy", PolicySchema);
