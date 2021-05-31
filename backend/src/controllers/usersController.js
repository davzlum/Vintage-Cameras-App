const debug = require('debug')('app:camerasController');
const User = require('../model/userModel');

function usersController() {
  async function getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function createOne(req, res) {
    const newUser = new User(req.body);
    debug(newUser);
    try {
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function deleteById(req, res) {
    try {
      await User.findByIdAndDelete(req.params.userId);
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
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true },
      );
      res.json(updatedUser);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  return {
    getAllUsers,
    createOne,
    deleteById,
    updateById,
  };
}

module.exports = usersController;
