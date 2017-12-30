const Raven = require('raven');

Raven.config(process.env.SENTRY_DNS).install();

module.exports = Raven;
