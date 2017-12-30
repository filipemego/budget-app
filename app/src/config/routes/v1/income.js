const KoaRouter = require('koa-router');

const incomeRouter = new KoaRouter({
  prefix: '/income',
});

module.exports = (router) => {
  incomeRouter.get('/', () => process.stdout.write('Get All'));

  incomeRouter.get('/:id', () => process.stdout.write('Get One'));

  incomeRouter.post('/', () => process.stdout.write('Create'));

  incomeRouter.patch('/:id', () => process.stdout.write('Update'));

  incomeRouter.put('/:id', () => process.stdout.write('Update or create'));

  router.use(incomeRouter.routes());
};
