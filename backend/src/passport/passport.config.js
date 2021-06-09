const passport = require('passport');
const JWTstrategy = require('passport-jwt');
const localStrategy = require('passport-local');
const User = require('../model/userModel');

passport.use(
  'signup',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async function createOne(req, email, password, done) {
      const existingUser = new User.findOne({email});
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
        favorites: [{type: Schema.ObjectId, ref: 'Camera' }],
        cart: [{ type: Schema.ObjectId, ref: 'Camera' }],
      });
      debug(newUser);
      try {
        await newUser.save();
        res.json(newUser);
      } catch (error) {
        debug(error);
        res.send(error);
        res.status(404);
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