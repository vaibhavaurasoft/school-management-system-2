const mongoose = require("mongoose");
// const RoleSchema = new mongoose.Schema({
//   role: {
//     type :String,
//     required:[true , "pleasee provide role name"]
//   },
// });

const RoleSchema = new mongoose.Schema({
  role: {
    type: [String],
    required: [true, "please provide role name"],
  },
});

module.exports = mongoose.model("Roles", RoleSchema);
