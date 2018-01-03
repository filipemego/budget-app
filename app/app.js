const Koa = require('koa');
const bootstrap = require('./src/config/bootstrap');

const app = new Koa();
const APP_PORT = process.env.APP_PORT || 3000;

bootstrap(app);

if (!module.parent) {
  app.listen(APP_PORT, () => {
    process.stdout.write(`App running on port ${APP_PORT}\n`);
  });
}
