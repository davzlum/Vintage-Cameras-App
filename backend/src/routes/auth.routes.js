const passport = require('passport');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const User = require('./../model/userModel');
const debug = require('debug')('app:usersController');

let refreshTokens = [];
const authRoutes = Router();

authRoutes.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
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
)

authRoutes.post(
  '/login',
  async (req, res, next) => {
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
              ).populate('cart').populate('favorites');

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
  },
);

authRoutes.post('/token', (req, res) => {
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
});

authRoutes.post('/logout', (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter((current) => current !== token);

  res.send('Logout successful');
});

authRoutes.get(
  '/profile',
  (req, res) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.headers.authorization,
    });
  },
);

module.exports = authRoutes;