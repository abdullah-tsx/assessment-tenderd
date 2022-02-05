const express = require('express');

const User = require('../model/user');
const authController = require('../controller/auth');
const {isAuth} = require("../middleware/isAuth");

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/signout', isAuth, authController.signout);

module.exports = router;