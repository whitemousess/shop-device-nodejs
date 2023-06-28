const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Devices = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: "name" ,unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("devices", Devices);
