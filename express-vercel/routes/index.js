const express = require('express')
const router = express.Router();
const controller = require('../controllers/index')

router.get('/',  controller.index);

router.get('/delete-user',  controller.delete);

module.exports = router; 
