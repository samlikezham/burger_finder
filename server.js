// dependencies
const express = require('express');
const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/burgers';
const session = require('express-session');
// const bodyParser = require('body-parser');

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

// API path
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

// use Router to call on API
app.use('/api', router);

// listener
app.listen(port, () => {
  console.log('Listening on port:', port);
})

// connections
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.on('open', () => {
	console.log('connected to mongoose!!!!!!!!');
});