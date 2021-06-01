const { Router } = require('express');
const lensesController = require('../controllers/lensesController')();

function lensesRoute() {
  const routes = Router();

  routes
    .route('/')
    .get(lensesController.getAllLenses)
    .post(lensesController.createOne);

  routes
    .route('/:lensId')
    .get(lensesController.getById)
    .put(lensesController.updateById)
    .delete(lensesController.deleteById);

  return routes;
}

module.exports = lensesRoute();