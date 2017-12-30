const KoaRouter = require('koa-router');

const expensesRouter = new KoaRouter({
  prefix: '/expenses',
});

module.exports = (router) => {
  expensesRouter.get('/', (context, next) => {
    context.body = [
      {
        id: 1,
        created: '2017-10-11',
        description: 'Nubank',
        amount: 1445.65,
        categories: [1, 2, 7],
      },
      {
        id: 2,
        created: '2017-10-11',
        description: 'Nubank',
        amount: 1445.65,
        categories: [1, 2, 7],
      }
    ];
  });

  expensesRouter.get('/:id', (context, next) => {
    context.body = {
      id: 2,
      created: '2017-10-11',
      description: 'Nubank',
      amount: 1445.65,
      categories: [1, 2, 7],
    }
  });

  expensesRouter.post('/', (context, next) => {
  });

  expensesRouter.patch('/:id', () => process.stdout.write('Update'));

  expensesRouter.put('/:id', () => process.stdout.write('Update or create'));

  router.use(expensesRouter.routes());
};
