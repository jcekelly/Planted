const router = require("express").Router();


router.get("/", (req, res, next) => {
  res.render("index");
  // render signup + login
});

// route for user dashboard + where all the plants are 

// routes to add + edit the plants 

module.exports = router;


