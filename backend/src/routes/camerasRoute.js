const { Router } = require('express');
const camerasController = require('../controllers/camerasController')();

function camerasRoute() {
  const routes = Router();

  routes
    .route('/')
    .get(camerasController.getAllCameras)
    .post(camerasController.createOne);

  routes
    .route('/:cameraId')
    .put(camerasController.updateById)
    .delete(camerasController.deleteById);

  return routes;
}

module.exports = camerasRoute();
