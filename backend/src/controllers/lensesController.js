const debug = require('debug')('app:lensesController');
const Lens = require('../model/lensModel');

function lensesController() {
  async function getAllLenses(req, res) {
    try {
      const lenses = await Lens.find();
      res.json(lenses);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function getById(req, res) {
    try {
      const lensById = await Lens.findById(
        req.params.lensId,
      );
      res.json(lensById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function createOne(req, res) {
    const newLens = new Lens(req.body);
    debug(newLens);
    try {
      await newLens.save();
      res.json(newLens);
    } catch (error) {
      res.status(404);
      debug(error);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Lens.findByIdAndDelete(req.params.lensId);
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
      const updatedLens = await Lens.findByIdAndUpdate(
        req.params.lensId,
        req.body,
        { new: true },
      );
      res.json(updatedLens);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  return {
    getAllLenses,
    getById,
    createOne,
    deleteById,
    updateById,
  };
}

module.exports = lensesController;