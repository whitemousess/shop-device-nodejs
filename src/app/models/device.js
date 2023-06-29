const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Devices = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: "name" ,unique: true },
    infoProduct: { type: String},
    type: { type: String},
    userUp: { type: String}
  },
  {
    timestamps: true,
  }
);

Devices.plugin(mongooseDelete,{
  deletedAt: true,
  overrideMethods: 'all'
})

module.exports = mongoose.model("devices", Devices);
