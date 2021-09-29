const express = require('express');
const router = express.Router();
const actionCtrl = require('../controllers/actions');

router.post('/scrap', actionCtrl.doTheThing);


module.exports = router;