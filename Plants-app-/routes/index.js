const router = require("express").Router();
const Plant = require('../models/plant.model')

router.get("/", (req, res, next) => {
  res.render("index");
  // render signup + login
});

// route for user dashboard + where all the plants are 

router.get('/dashboard', (req, res, next) => {
    Plant.find()
      .then(personalCollectionPlants => {
        console.log('Retrieved plants:', personalCollectionPlants);
        res.render('dashboard.hbs');
      })
      .catch(error => {
        console.log('Error while getting the plants from the DB: ', error);
        next(error);
      });
  });
   

// routes to add + edit the plants 

router.get('/searchresult', (req, res, next) => {
  Plant.findById()
    .then(allPlantsWithResult => {
      console.log('Retrieved plants:', allPlantsWithResult);
      res.render('search-result.hbs');
    })
    .catch(error => {
        console.log('Error while getting the plants from the DB: ', error);
        next(error);
      });
  });

  router.get(':plantId/edit', (req, res, next) => {
    const { plantId } = req.params;
   
    Plant.findById(plantId)
      .then(plantToEdit => {
        res.render('plant-edit.hbs', { plant: plantToEdit }); 
      })
      .catch(error => next(error));
  });

  /*router.post(':bookId/edit', (req, res, next) => {
    const { plantId } = req.params;
    //const {  } = req.body;
   
    //Plant.findByIdAndUpdate(plantId, {  }, { new: true })
      .then(updatedPlant => res.redirect(`/books/${updatedBook.id}`)) // go to the details page to see the updates
      .catch(error => next(error));
  });
*/
module.exports = router;


