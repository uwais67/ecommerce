const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user'); // Import your User model

const router = express.Router();
// Registration route
router.get('/register', (req, res) => {
    res.render('registration'); // Render registration form
});

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword
        });
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.redirect('/register');
    }
});
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.user });
});

// Login route
router.get('/login', (req, res) => {
    res.render('login'); // Render login form
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, continue
  }
  res.redirect('/login'); // User is not authenticated, redirect to login
}

module.exports = router;

