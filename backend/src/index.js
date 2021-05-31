const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
require('./ddbb/mongoose.config');

const camerasRoute = require('./routes/camerasRoute');

app.use('/cameras', camerasRoute);

const usersRoute = require('./routes/usersRoute');

app.use('/users', usersRoute);

app.listen(port,
  () => debug(`Server is running in ${chalk.magentaBright(`localhost:${port}`)}`));
