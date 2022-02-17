const router = require("express").Router();
const Plant = require('../models/plant.model');
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.render("index");
  // render signup + login
});

// route for user dashboard 

router.get('/dashboard', (req, res, next) => {
    User.findById(req.session.currentUser._id).populate("myPlants.id")
      .then(userFromDb => {
        res.render('dashboard.hbs', {user: userFromDb});
        //if(this.needWater === true){

        //}
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

// search function 


router.get('/search', (req, res, next) => {
  console.log(req.query);
  const val = req.query.plant
  Plant.find({$or:[{family: val},{commonName: val},{name: val},{Category: val}]})
  .then(plantResults => {
    res.render('view-all-search-result', {plant: plantResults})
    console.log(plantResults);
  }) 
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
  console.log("test")
  User.findById(req.session.currentUser._id)
    .populate('myPlants.id')
    .then((user) => {
      //console.log("this is the user", user.myPlants)
      let chosenPlant;
      user.myPlants.map((plant) => {
        //console.log('params', req.params.id)
        //console.log('plant id', plant.id._id)
        if (req.params.id.includes(plant.id._id)) {
          chosenPlant = plant
          console.log('chosen plant');
        }})
        res.render('plant-edit.hbs', { plant: chosenPlant }); 

      })
      .catch(err => {
        next(err);
      })
});


router.post('/:id/editThis', (req, res, next) => {
  const { picture, temperature, humidity, category, nickName, needWater} = req.body;
  User.findById(req.session.currentUser._id).populate("myPlants.id")
    .then((user) => {
      user.myPlants.map((plant) => {
        if (req.params.id.includes(plant.id._id)) {
          plant.currentPicture = picture;
          plant.currentTemperature = temperature;
          plant.currentHumidity = humidity;
          plant.currentCategory = category;
          plant.nickName = nickName;
          plant.needWater= needWater;
          console.log('the plant', plant);
        }
      });
     user.save(); 
    })
    .catch((err) => {
      next(err);
    });
});


router.get('/dashboard/:id/delete', (req, res, next) => {
  const userSessionId = req.session.currentUser._id
  User.findByIdAndUpdate(userSessionId, {
    $pull: {"myPlants": req.params.id} 
  })
    .then(() => {
      res.redirect('/dashboard');
    })
    .catch(err => {
      next(err);
    })
});

/*router.get('/movie-characters/delete/:id', (req, res) => {
  const characterId = req.params.id;
 
  apiService
    .deleteCharacter(characterId)
    .then((response) => {
       res.json(response.data);
      // res.redirect(`/movie-characters/list`); // <== leave this line commented for now
    })
    .catch(error => console.log(error));
});
*/

/*Handlebars.registerHelper('iff', function(){
  
})
document.getElementById('show').addEventListener("click", function(){
  if(req.session.currentUser.id._id === true){
    false
  }else{
    true
  }
})
const iNeedWater = function(){

}
*/

module.exports = router;

