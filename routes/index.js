const usersRouter = require('./users');

function routes(router){
  router.use('/users', usersRouter);
  return router;
}

module.exports = routes;