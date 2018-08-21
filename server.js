// dependencies
const express = require('express');
const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/burgers';
const session = require('express-session');
const bodyParser = require('body-parser');
const Burgers = require('./models/burgers')

const app = express();
const router = express.Router();
// port
const port = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret:'feedmeseymour',
    resave: false,
    saveUninitialized: false
}));
// allows for Cross Origin Resource sharing (CORS errors)
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  next();
});

// controllers
const burgersController = require('./controllers/burgers.js');
app.use('/burgers', burgersController);


// listener
app.listen(port, () => {
  console.log('Listening on port:', port);
})

// connections
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.on('open', () => {
	console.log('connected to mongoose!!!!!!!!');
});
