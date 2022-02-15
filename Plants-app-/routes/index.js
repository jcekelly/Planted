const router = require("express").Router();
const Plant = require('../models/plant.model');
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.render("index");
  // render signup + login
});

// route for user dashboard + where all the plants are 

router.get('/dashboard', (req, res, next) => {
    User.findById(req.params.id).populate("myPlants")
      .then(personalCollectionPlants => {
        res.render('dashboard.hbs', {plants: personalCollectionPlants});
      })
      .catch(error => {
        next(error);
      });
});
  

// routes to add + edit the plants 

router.get('/search-result', (req, res, next) => {
  Plant.find()
    .then(allPlants => {
      res.render('search-result.hbs', {plants:allPlants});
    })
    .catch(error => {
        next(error);
      });
});



router.get('/dashboard/:id/edit', (req, res, next) => {
    Plant.findById(req.params.id)
      .then(plantToEdit => {
        res.render('plant-edit.hbs', { plant: plantToEdit }); 
      })
      .catch(err => {
        next(err);
      })
});


router.post('/dashboard/:id/delete', (req, res, next) => {
    Plant.findOneAndDelete({ _id: req.params.id })
      .then(() => {
        res.redirect('/dashboard');
      })
      .catch(err => {
        next(err);
      })
});

module.exports = router;


