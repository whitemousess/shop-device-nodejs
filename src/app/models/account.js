const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Account = new Schema(
  {
    email: {type: String},
    username: {type: String},
    password: {type: String},
    role: {type: Number},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("accounts", Account);
