const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

require('./ddbb/mongoose.config');

const camerasRoute = require('./routes/camerasRoute');

app.use('/cameras', camerasRoute);

app.listen(port, debug(`Server is running in ${chalk.bgCyan(port)}`));
