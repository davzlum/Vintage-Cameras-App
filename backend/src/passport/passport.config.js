const passport = require('passport');
const JWTstrategy = require('passport-jwt');
const localStrategy = require('passport-local');
const User = require('../model/userModel');
const md5 = require('md5');

passport.use(
  'signup',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const existingUser = await User.findOne({email});
        if (existingUser) {
        return done(null, false, { message: 'User alredy exists' });
        }
        const newUser = new User({
          name: req.body.name,
          username: req.body.username,
          email: email.toLowerCase(),
          address: req.body.address,
          city: req.body.city,
          cp: req.body.cp,
          phone: req.body.phone,
          password: md5(password),
        });

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.use(
  'login',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        if (!user.isValidPassword(password)) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.use(
  new JWTstrategy.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: JWTstrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);