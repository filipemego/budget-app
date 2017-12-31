const KoaRouter = require('koa-router');
const expensesController = require('../../../controllers/expensesController');

const expensesRouter = new KoaRouter({
  prefix: '/expenses',
});

module.exports = (router) => {
  expensesRouter.get('/', expensesController.getAll);

  expensesRouter.get('/:id', expensesController.get);

  expensesRouter.post('/', expensesController.create);

  expensesRouter.patch('/:id', expensesController.patch);

  expensesRouter.put('/:id', expensesController.put);

  router.use(expensesRouter.routes());
};
