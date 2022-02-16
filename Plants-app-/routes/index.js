const router = require("express").Router();
const Plant = require('../models/plant.model');
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.render("index");
  // render signup + login
});

// route for user dashboard 

router.get('/dashboard', (req, res, next) => {
    User.findById(req.session.currentUser._id).populate("myPlants")
      .then(userFromDb => {
        res.render('dashboard.hbs', {user: userFromDb});
      })
      .catch(error => {
        next(error);
      });
});
  

// route for the global plant collection

router.get('/search-result', (req, res, next) => {
  Plant.find()
    .then(allPlants => {
      res.render('search-result.hbs', {plants:allPlants});
    })
    .catch(error => {
        next(error);
      });
});

router.get('/search', (req, res, next) => {
  res.send(req.query);
  console.log(req.query)
});

//this is the route to add the plant to your private collection

router.get('/dashboard/:id/add', (req, res, next) => {
  User.findByIdAndUpdate(req.session.currentUser._id , {
    $push: {myPlants: req.params.id}
  })
    .then((user) => {
      console.log(user)
     res.redirect('/dashboard')
    })
    .catch(err => {
      next(err);
    })
});

//this is the edit route

router.get('/dashboard/:id/edit', (req, res, next) => {
    Plant.findById(req.params.id)
      .then(plantToEdit => {
        res.render('plant-edit.hbs', { plant: plantToEdit }); 
      })
      .catch(err => {
        next(err);
      })
});

router.post('/dashboard/:id/edit', (req, res, next)=> {
  User.findByIdAndUpdate(req.session.currentUser._id ,
    { new: true })
  .then(user =>{
    res.redirect('/dashboard')
  })
    .catch(err => {
      next(err);
    })
});
 

router.get('/dashboard/:id/delete', (req, res, next) => {
  User.findByIdAndUpdate(req.session.currentUser._id , {
    $pull: {myPlants: req.params.id}
  })
    .then(() => {
      res.redirect('/dashboard')
    })
    .catch(err => {
      next(err);
    })
});

module.exports = router;


