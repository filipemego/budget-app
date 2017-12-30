const KoaRouter = require('koa-router');
const expensesRoutes = require('./routes/v1/expenses');
const incomeRoutes = require('./routes/v1/income');

const router = KoaRouter({
  prefix: '/v1',
});
expensesRoutes(router);
incomeRoutes(router);

module.exports = router;
