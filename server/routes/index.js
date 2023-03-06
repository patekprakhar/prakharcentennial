let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

router.get('/', indexController.DisplayHomePage); 

router.get('/home', indexController.DisplayHomePage);

router.get('/projects', indexController.DisplayProductsPage);

router.get('/services', indexController.DisplayServicesPage);

router.get('/about', indexController.DisplayAboutPage);

router.get('/contact', indexController.DisplayContactPage);

router.get('/login', indexController.DisplayLoginPage);

router.post('/login', indexController.ProcessLoginPage);

router.get('/logout', indexController.PerformLogout);

module.exports = router;
