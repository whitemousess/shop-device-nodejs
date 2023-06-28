class authController {
  viewLogin(req, res, next) {
    res.render("auth/login", { layout: null });
  }

  viewRegister(req, res, next) {
    res.render("auth/register", { layout: null });
  }
}

module.exports = new authController();
