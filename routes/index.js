const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
//isAuth

router.get('/', indexController.loadIndex);





module.exports = router;