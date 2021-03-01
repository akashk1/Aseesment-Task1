var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var AgentSchema = Schema({
  id: { type: Number, unique: true, required: true },
  agent_name: { type: String, required: true },
});
module.exports = mongoose.model("Agent", AgentSchema);
