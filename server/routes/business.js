let express = require('express');
let router = express.Router();

let BusinessController = require('../controllers/business');

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

router.get('/', BusinessController.DisplayBusinessList);
  
router.get('/add', requireAuth, BusinessController.DisplayAddPage);

router.post('/add', requireAuth, BusinessController.ProcessAddPage);

router.get('/edit/:id', requireAuth, BusinessController.DisplayEditPage);

router.post('/edit/:id', requireAuth, BusinessController.ProcessEditPage);

router.get('/delete/:id', requireAuth, BusinessController.ProcessDeletePage);


module.exports = router;