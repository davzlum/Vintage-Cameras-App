const { Router } = require('express');
const camerasController = require('../controllers/camerasController')();
const lensesController = require('../controllers/lensesController')();
const filmsController = require('../controllers/filmsController')();

function productsRoute() {
  const routes = Router();

  routes
    .route('/cameras')
    .get(camerasController.getAllCameras)
    .post(camerasController.createOne);

  routes
    .route('/cameras/:cameraId')
    .get(camerasController.getById)
    .put(camerasController.updateById)
    .delete(camerasController.deleteById);

    routes
    .route('/lenses')
    .get(lensesController.getAllLenses)
    .post(lensesController.createOne);

  routes
    .route('/lenses/:lensId')
    .get(lensesController.getById)
    .put(lensesController.updateById)
    .delete(lensesController.deleteById);

  routes
    .route('/films')
    .get(filmsController.getAllFilms)
    .post(filmsController.createOne);

  routes
    .route('/films/:filmId')
    .get(filmsController.getById)
    .put(filmsController.updateById)
    .delete(filmsController.deleteById);

  return routes;
}

module.exports = productsRoute();
