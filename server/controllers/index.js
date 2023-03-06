let express = require('express');
let router = express.Router();
let passport = require('passport');

let userModel = require('../models/user');
let User = userModel.Model;

module.exports.DisplayHomePage = (req, res, next) => {

    console.log("Home Page Controller");

    res.render('index', { title: 'Home',
    displayName: req.user ? req.user.displayName : '' });
  }
  
module.exports.DisplayProductsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects',
    displayName: req.user ? req.user.displayName : '' });
  }

module.exports.DisplayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services',
    displayName: req.user ? req.user.displayName : '' });
  }

module.exports.DisplayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About',
    displayName: req.user ? req.user.displayName : '' });
  }
  
module.exports.DisplayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact',
    displayName: req.user ? req.user.displayName : '' });
  }

module.exports.DisplayLoginPage = (req, res, next) => {
  if(!req.user)
  {
    res.render('auth/login', 
    {
      title: 'Login',
      messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
  }
  else
  {
    return res.redirect('/');
  }
}

module.exports.ProcessLoginPage = (req, res, next) => {
  passport.authenticate('local', 
  (err, user, info) => {
    if(err)
    {
      console.log(err);
      return next(err);
    }

    if(!user)
    {
      req.flash('loginMessage', 'Authentication Error');
      return res.redirect('/login');
    }

    req.logIn(user, (err) => {
      if(err)
      {
        console.log(err);
        return next(err);
      }

      return res.redirect('/business-list')
    });
  })(req, res, next);
}

module.exports.PerformLogout = (req, res,next) => {
  req.logout();
  res.redirect('/');
}