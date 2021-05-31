const debug = require('debug')('app:camerasController');
const Camera = require('../model/cameraModel');

function camerasController() {
  async function getAllCameras(req, res) {
    try {
      const cameras = await Camera.find();
      res.json(cameras);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function getById(req, res) {
    try {
      const cameraById = await Camera.findById(
        req.params.cameraId,
      );
      res.json(cameraById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function createOne(req, res) {
    const newCamera = new Camera(req.body);
    debug(newCamera);
    try {
      await newCamera.save();
      res.json(newCamera);
    } catch (error) {
      res.status(404);
      debug(error);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Camera.findByIdAndDelete(req.params.cameraId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedCamera = await Camera.findByIdAndUpdate(
        req.params.cameraId,
        req.body,
        { new: true },
      );
      res.json(updatedCamera);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  return {
    getAllCameras,
    getById,
    createOne,
    deleteById,
    updateById,
  };
}

module.exports = camerasController;
