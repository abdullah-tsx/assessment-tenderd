const express = require('express');

const marketController = require('../controller/market');
const {isAuth} = require('../middleware/isAuth');
const router = express.Router();

router.post('/purchase', isAuth, marketController.create);

module.exports = router;