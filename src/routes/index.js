const authRouter = require("./auth");
const siteRouter = require("./site");
const deviceRouter = require("./device");

function route(app) {

  app.use('/device',deviceRouter);
  app.use('/auth', authRouter);
  app.use('/',siteRouter);

}

module.exports = route;