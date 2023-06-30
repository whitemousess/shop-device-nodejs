const jwt = require("jsonwebtoken");
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require("../../utils/mongoose");
const deviceModel = require("../models/device");

class deviceController {
  // home
  getIphone(req, res, next) {
    deviceModel.findOne({ slug: req.params.slug }).then((device) => {
      res.render("device/show", { device: mongooseToObject(device) });
    });
  }
  // client create
  viewCreate(req, res, next) {
    res.render("device/create");
  }

  // client create
  viewEdit(req, res, next) {
    deviceModel.findById(req.params.id).then((device) => {
      res.render("device/edit", { device: mongooseToObject(device) });
    });
  }
  // handle create
  create(req, res, next) {
    var token = req.cookies.token;
    var ketqua = jwt.verify(token, "device");
    req.body.userUp = ketqua._id;
    req.body.image = req.file.filename;
    const device = new deviceModel(req.body);
    device
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch(next);
  }

  // handle update
  update(req, res, next) {
    req.body.image = req.file.filename;
    deviceModel
      .updateOne({ _id: req.params.id }, req.body)
      .then((device) => {
        res.redirect("/device/manager");
      })
      .catch(next);
  }

  // hanlde delete destroy
  destroy(req, res, next) {
    deviceModel
      .delete({ _id: req.params.id })
      .then((device) => {
        res.redirect("back");
      })
      .catch(next);
  }
  // destroyForce
  destroyForce(req, res, next) {
    deviceModel
    .deleteOne({ _id: req.params.id })
    .then((device) => {
      fs.unlink(device.image)
      res.redirect("back");
    })
    .catch(next);
  }

  // handle restore
  restore(req, res, next) {
    deviceModel.restore({_id: req.params.id})
    .then(() => {
      res.redirect('back')
    })
    .catch(next)
  }

  // client stored by userUp
  storedProduct(req, res, next) {
    var token = req.cookies.token;
    var ketqua = jwt.verify(token, "device");
    deviceModel
      .find({userUp: ketqua._id})
      .then((device) => {
        res.render("device/manager", {
          device: multipleMongooseToObject(device),
        });
      })
      .catch(next);
  }

  // client trash stored by userUp
  trashProduct(req, res, next) {
    var token = req.cookies.token;
    var ketqua = jwt.verify(token, "device");
    deviceModel.findDeleted({ userUp: ketqua._id }).then((device) =>
      res.render("device/managerTrash",{
        device: multipleMongooseToObject(device),
      })
    );
  }
}

module.exports = new deviceController();
