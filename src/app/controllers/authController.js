const jwt = require("jsonwebtoken");

const accountModel = require("../models/account");

class authController {
  // client
  viewLogin(req, res, next) {
    accountModel
      .find({})
      .then((account) => {
        res.render("auth/login", { layout: null });
      })
      .catch(next);
  }

  viewRegister(req, res, next) {
    res.render("auth/register", { layout: null });
  }

  // info user
  authentication(req, res, next) {
    var token = req.cookies.token;
    var ketqua = jwt.verify(token, "device");
    accountModel
      .findOne({_id: ketqua._id})
      .then((account) => res.json( account ))
      .catch(next);
  }

  // handle events
  login(req, res, next) {
    const { username, password } = req.body;
    accountModel
      .findOne({ username, password })
      .then((account) => {
        if (!account) {
          return res.json({ message: "Invalid username or password" });
        } else {
          var token = jwt.sign({ _id: account._id }, "device");
          return res.json({
            message: "Login is success",
            token: token,
            role: account.role,
          });
        }
      })
      .catch(next);
  }

  register(req, res, next) {
    req.body.role = 1;
    const account = new accountModel(req.body);
    account
      .save()
      .then((account) => res.redirect("/auth/login"))
      .catch(next);
  }
}

module.exports = new authController();
