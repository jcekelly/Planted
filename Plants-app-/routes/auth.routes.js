const { Router } = require('express');
const router = new Router();

const bcryptjs = require('bcryptjs');
const User = require('../models/User.model');
const saltRounds = 10;

let test;
 

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
          req.session.currentUser = userFromDB;
          res.redirect('/dashboard');
      })
      .catch(error => next(error));
  });

  router.get("/login", (req, res, next) => {
    res.render("auth/login");
  });

  router.post('/login', (req,res,next)=>{
    const {username, password } = req.body

    console.log('SESSION =====> ', req.session);

    User.findOne({ username: username})
    .then(userFromDB => {
        if( userFromDB === null) {
            res.render('auth/login', {message: 'User Does Not Exist'})
            return
        }
        if (bcryptjs.compareSync(password, userFromDB.passwordHash)) {
            console.log('User Authenticated')
            req.session.currentUser = userFromDB;
            res.redirect('/dashboard')
        }
    })
})

router.post('/logout', (req, res, next) => {
    req.session.destroy(err => {
      if (err) next(err);
      res.redirect('/');
    });
  });


module.exports = router;
