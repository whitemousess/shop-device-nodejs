const authRouter = require("./auth");
const siteRouter = require("./site");
const deviceRouter = require("./device");

function route(app) {

  app.use('/device',deviceRouter);
  app.use('/auth', authRouter);
  app.use('/',siteRouter);
  app.use('/', function(req, res, next){res.render('handleError/error404' , {layout: null})})
}

module.exports = route;