const { Console } = require('console');
let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Business = require('../models/business');

module.exports.DisplayBusinessList = (req, res, next) => {
  
    Business.Model.find( (err, data) => {
      if(err)
      {
        console.error(err);
        res.end()
      }
      else{
        console.log(data)
        res.render('index', { title: 'Business List', businessess: data ,
        displayName: req.user ? req.user.displayName : ''});  
      } 
    }).collation({locale:'en',strength:2}).sort({name:1});
    
  }

module.exports.DisplayAddPage = (req, res, next)=> {
    res.render('index', { title: 'Add Contact' });
}

module.exports.ProcessAddPage = (req, res, next)=> {

    let business = Business.Model({
        "name":req.body.name,
        "number": req.body.number,
        "email": req.body.email

    });

    Business.Model.create(business, (err, Business) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}

module.exports.DisplayEditPage = (req, res, next)=> {
    let id = req.params.id;

    Business.Model.findById(id, (err, BusinessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit Business', data: BusinessToEdit,
        displayName: req.user ? req.user.displayName : '' });
    });
}

module.exports.ProcessEditPage = (req, res, next)=> {
    let id = req.params.id;

     let updatedBusiness = Business.Model({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Business.Model.updateOne({_id: id}, updatedBusiness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}

module.exports.ProcessDeletePage = (req, res, next)=> {
    let id = req.params.id;

    Business.Model.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}