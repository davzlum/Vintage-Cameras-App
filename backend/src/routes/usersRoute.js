const { Router } = require('express');
const usersController = require('../controllers/usersController')();

function usersRoute() {
  const routes = Router();

  routes
    .route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createOne);

  routes
    .route('/:userId')
    .get(usersController.getById)
    .put(usersController.updateById)
    .delete(usersController.deleteById);

  return routes;
}

module.exports = usersRoute();
