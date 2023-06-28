const { mongooseToObject } = require("../../utils/mongoose");
const deviceModel = require("../models/device");

class deviceController {
  getIphone(req, res, next) {
    deviceModel.findOne({slug: req.params.slug})
    .then((device) => {
      res.render("device/show", { device: mongooseToObject(device) });
    });
  }
}

module.exports = new deviceController();
