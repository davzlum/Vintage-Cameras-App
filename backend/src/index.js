const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const cors = require('cors');
const morgan = require('morgan');
const productsRoute = require('./routes/productsRoute');
const usersRoute = require('./routes/usersRoute');
const passport = require('passport');
const authRoutes = require('./routes/auth.routes');

require('dotenv').config();
require('./passport/passport.config');


const app = express();
const port = process.env.PORT || 2021;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
require('./ddbb/mongoose.config');


app.use(express.urlencoded({ extended: false }));

app.use('/', authRoutes);

app.use(
  '/user',
  passport.authenticate('jwt', { session: false }),
  usersRoute,
  );
  
app.use(
    '/products', 
    passport.authenticate('jwt', { session: false }),
    productsRoute
  );

app.listen(port,
() => debug(`Server is running in ${chalk.magentaBright(`localhost:${port}`)}`));
