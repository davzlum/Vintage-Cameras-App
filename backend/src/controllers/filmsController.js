const debug = require('debug')('app:filmsController');
const Film = require('../model/filmModel');

function filmsController() {
  async function getAllFilms(req, res) {
    try {
      const films = await Film.find();
      res.json(films);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function getById(req, res) {
    try {
      const filmById = await Film.findById(
        req.params.filmId,
      );
      res.json(filmById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function createOne(req, res) {
    const newFilm = new Film(req.body);
    debug(newFilm);
    try {
      await newFilm.save();
      res.json(newFilm);
    } catch (error) {
      res.status(404);
      debug(error);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Film.findByIdAndDelete(req.params.filmId);
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
      const updatedFilm = await Film.findByIdAndUpdate(
        req.params.filmId,
        req.body,
        { new: true },
      );
      res.json(updatedFilm);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  return {
    getAllFilms,
    getById,
    createOne,
    deleteById,
    updateById,
  };
}

module.exports = filmsController;
