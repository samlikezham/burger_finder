const express = require('express');
const router = express.Router();
const Burgers = require('../models/burgers.js');

// index route
// router.get('/:user', (req, res) => {
// 	Burgers.find({user: req.params.user}, (err, foundBurger) => {
// 		res.json(foundBurger);
// 	});
// });:image

// index route
router.get('/', (req, res) => {
	Burgers.find({user: req.params.user}, (err, foundBurger) => {
		res.json(foundBurger);
	});
});

// get route
router.get('/:id', (req, res)=>{
    Burgers.findById(req.params.id, (err, foundBurger)=>{
        res.send(foundBurger);
    });
});

// post new burger
router.post('/', (req, res) => {
	Burgers.create(req.body, (err, foundBurger) => {
		res.json(foundBurger);
	});
});

// delete my burger
router.delete('/:id', (req, res) => {
    Burgers.findByIdAndRemove(req.params.id, (err, foundBurger)=>{
        res.json(foundBurger);
    });
});


module.exports = router;