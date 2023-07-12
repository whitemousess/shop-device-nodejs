const deviceModel = require("../models/device");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class homeController {
  home(req, res, next) {
    deviceModel
      .find({})
      .then(
        (device) =>
          res.render("home", { device: multipleMongooseToObject(device) })
        // res.json({ data: multipleMongooseToObject(device)})
      )
      .catch(next);
  }

  searchDevice(req, res, next) {
    let params = [];
    params.q = req.query.q;

    let objWhere = {};
    // search for items
    if (params.q !== "") objWhere.name = new RegExp(params.q, "i");

    deviceModel.find(objWhere).then((device) => {
      res.render("home", { device: multipleMongooseToObject(device) })

    });
  }
}

module.exports = new homeController();
