const express = require('express');
const cors = require('cors');
const path = require('path');
const expressLayoutes = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const config = require('./startup/config');
const winston = require('winston');
const err = require('./middleware/errors');

const homeRoutes = require('./routes/home');
const educationRoutes = require('./routes/education'); //


const app = express();

require('./startup/db')();
require('./startup/logging')();
require('./startup/validations')();

app.use(expressLayoutes);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/educations',educationRoutes.educations); //

app.use(err);


app.listen(config.port, () => winston.info('App is listening on url http://localhost:' + config.port));

