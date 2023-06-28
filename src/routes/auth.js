const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/authController');

router.get('/login',authController.viewLogin)
router.get('/register',authController.viewRegister)

module.exports = router;