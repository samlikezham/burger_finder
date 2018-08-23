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

// show route
router.get('/:id', (req, res)=>{
    Burgers.findById(req.params.id).populate("comments").exec((error, foundBurger)=>{
      if(error) {
        console.log(error);
      } else {
        console.log(foundBurger)
        res.send({burgers: foundBurger});
      }
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

// update my burger
router.put('/:id', (req, res) => {
  Burgers.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBurger) => {
    res.json(updatedBurger)
  });
});


module.exports = router;