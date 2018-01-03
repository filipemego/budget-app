const bodyParser = require('koa-bodyparser');
const responseTime = require('koa-response-time');
const logger = require('koa-logger');
const Raven = require('./raven');
const routes = require('./routes');

module.exports = (app) => {
  if (process.env.SENTRY_DNS) {
    app.on('error', (err) => {
      Raven.captureException(err, (capturedError, eventId) => {
        process.stdout.write(`Reported error ${eventId}`);
      });
    });
  }

  app
    .use(responseTime())
    .use(logger())
    .use(bodyParser());

  app.use(routes.routes());
  app.use(routes.allowedMethods());
};
