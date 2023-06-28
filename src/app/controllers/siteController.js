const deviceModel = require("../models/device");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class homeController {
  home(req, res, next) {
    deviceModel
      .find({})
      .then((device) => 
      res.render('home', { device: multipleMongooseToObject(device)})
      // res.json({ data: multipleMongooseToObject(device)})
      )
      .catch(next);
  }
}

module.exports = new homeController();
