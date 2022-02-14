const { Router } = require('express');
const router = new Router();

const bcryptjs = require('bcryptjs');
const User = require('../models/User.model');
const saltRounds = 10;
 

router.get('/signup', (req, res) => res.render('auth/signup'));

router.post('/signup', (req, res, next) => {   
    const { username, password } = req.body;
   
    bcryptjs
      .genSalt(saltRounds)
      .then(salt => bcryptjs.hash(password, salt))
      .then(hashedPassword => {
          return User.create({
              username,
              passwordHash: hashedPassword
          })
      })
      .then(userFromDB => {
          console.log('new user:', userFromDB);
      })
      .catch(error => next(error));
  });


module.exports = router;
