const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const cors = require('cors');
const morgan = require('morgan');
const camerasRoute = require('./routes/camerasRoute');
const lensesRoute = require('./routes/lensesRoute');
const usersRoute = require('./routes/usersRoute');
const passport = require('passport');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

require('dotenv').config();
require('./passport/passport.config');


const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
require('./ddbb/mongoose.config');

app.use('/cameras', camerasRoute);

app.use('/lenses', lensesRoute);

app.use('/users', usersRoute);

app.use(express.urlencoded({ extended: false }));

app.use('/', authRoutes);
app.use(
  '/user',
  passport.authenticate('jwt', { session: false }),
  userRoutes,
);

app.listen(port,
() => debug(`Server is running in ${chalk.magentaBright(`localhost:${port}`)}`));
