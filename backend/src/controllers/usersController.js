const debug = require('debug')('app:usersController');
const User = require('../model/userModel');
const md5 = require('md5');
const passport = require('passport');
const jwt = require('jsonwebtoken');

let refreshTokens = [];

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
      const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email.toLowerCase(),
        address: req.body.address,
        city: req.body.city,
        cp: req.body.cp,
        phone: req.body.phone,
        password: md5(req.body.password),
      });
      try{
        user.save();
        res.status(200)
        res.send('Signup successful')
      }catch{
        res.status(500)
        res.send('We could not register the user')
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
      res.json(updatedUser);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function login (req, res, next) {
    passport.authenticate(
      'login',
      async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return next(error);
          }

          return req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const data = { _id: user._id, email: user.email };
              const token = jwt.sign(
                { user: data },
                process.env.JWT_SECRET,
                // { expiresIn: '1m' },
              );
              const refreshToken = jwt.sign(
                { user: data },
                process.env.JWT_SECRET,
              );

              const userById = await User.findById(
                user._id
              )
              .populate({
                path: 'cart', 
                populate: ['cameras', 'lenses', 'films']
              })
              .populate({
                path: 'favorites', 
                populate: ['cameras', 'lenses', 'films']
              });
              refreshTokens.push(refreshToken);

              return res.json({
                token,
                refreshToken,
                user: userById
              });
            },
          );
        } catch (error) {
          return next(error);
        }
      },
    )(req, res, next);
  }

  async function token (req, res){
    const { token } = req.body;
  
    if (!token) {
      return res.sendStatus(401);
    }
  
    if (!refreshTokens.includes(token)) {
      return res.sendStatus(403);
    }
  
    return jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
  
      const data = { _id: user._id, email: user.email };
  
      const accessToken = jwt.sign(
        { user: data },
        process.env.JWT_SECRET,
        // { expiresIn: '240m' },
      );
  
      return res.json({
        accessToken,
      });
    });
  }

  async function logout (req, res) {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter((current) => current !== token);
    res.send('Logout successful');
  }

  async function profile (req, res) {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.headers.authorization,
    });
  }

  return {
    getAllUsers,
    getById,
    createOne,
    deleteById,
    updateById,
    login,
    token,
    logout,
    profile,
  };
}

module.exports = usersController;
