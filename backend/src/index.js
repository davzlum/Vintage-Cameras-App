const express = require('express');
const debug = require('debug')('app');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, debug(`server is running on port ${port}`));
