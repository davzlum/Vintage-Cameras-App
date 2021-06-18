const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const cors = require('cors');
const morgan = require('morgan');
const productsRoute = require('./routes/productsRoute');
const passport = require('passport');
const authRouter = require('./routes/auth.routes');

require('dotenv').config();
require('./passport/passport.config');


const port = process.env.PORT || 2021;
const originHost = process.env.ORIGIN_HOST || 'http://localhost:3000';

const app = express();
app.disable('x-powered-by');
const corsOptions = {
  origin: originHost,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
require('./ddbb/mongoose.config');


app.use(express.urlencoded({ extended: false }));

app.use('/', authRouter);
  
app.use(
    '/products', 
    passport.authenticate('jwt', { session: false }),
    productsRoute
  );

app.listen(port,
() => debug(`Server is running in ${chalk.magentaBright(`localhost:${port}`)}`));
