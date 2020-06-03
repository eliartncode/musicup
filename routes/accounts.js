const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accounts');
const isAuth = require('../middleware/isAuth');

router.get('/login', accountsController.loadLogin);
router.get('/signup', accountsController.loadRegister);
router.post('/signupAction', accountsController.signupAction);
router.post('/loginAction', accountsController.loginAction);



module.exports = router;