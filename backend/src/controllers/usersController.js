const debug = require('debug')('app:usersController');
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

  async function getById(req, res) {
    try {
      const userById = await User.findById(
        req.params.userId,
      )
      .populate({
        path: 'cart', 
        populate: ['camera', 'lens', 'film']
      })
      .populate({
        path: 'favorites', 
        populate: ['camera', 'lens', 'film']
      });
      res.json(userById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
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
    let updateData = req.body;
    if(Object.keys(updateData).some(key => key === 'isFavorite' || key ==='isOnCart')) {
      if (updateData.isFavorite || updateData.isOnCart) {
        updateData = {
         ...updateData,
          $pull: { [`${updateData.array}.${updateData.product.section}`]: updateData.product._id}
         
        }
      } else {
        updateData = {
      ...updateData,
          $push: { [`${updateData.array}.${updateData.product.section}`]: updateData.product._id}
        }
      }
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        updateData,
        { new: true },
      );
      console.log(updateData);
      res.json(updatedUser);
      console.log('asdasd',updatedUser)
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  return {
    getAllUsers,
    getById,
    createOne,
    deleteById,
    updateById,
  };
}

module.exports = usersController;
