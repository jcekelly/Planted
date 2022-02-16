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

//this is the route to add the plant to your private collection

router.get('/dashboard/:id/add', (req, res, next) => {
  User.findByIdAndUpdate(req.session.currentUser._id , {
    $push: {myPlants: {id: req.params.id}}
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

/*
router.post('/:id/edit', (req, res, next)=> {
  let plants = User.myPlants
  //let plantToEdit = plants.find(plant => {
    //return plant._id 
  //})
  User.findById(req.session.currentUser._id)
 //   { new: true }).map(plantToEdit)
  .then(user =>{
    user.myPlants.map((plant) => {
      console.log('this is the plant', plant)
    }) 
    res.redirect('/dashboard')
  })
    .catch(err => {
      next(err);
    })
});
*/

router.post('/:id/editThis', (req, res, next) => {
  const { temperature, humidity, category, nickName, size:{potSize, height}} = req.body;

  console.log('testing');
  User.findById(req.session.currentUser._id)
    .then((user) => {
      user.myPlants.map((plant) => {
        if (req.params.id.includes(plant._id)) {
          plant.temperature = temperature;
          plant.humidity = humidity;
          plant.category = category;
          plant.nickName = nickName;
          plant.size.potSize = potSize;
          plant.size.height = height;
          
          console.log('the plant', plant);
        }
      });
    })
    .catch((err) => {
      next(err);
    });
});
//hope it works

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


