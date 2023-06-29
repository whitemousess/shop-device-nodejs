const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/authController');
// login
router.get('/login',authController.viewLogin)
router.post('/login',authController.login)

// register
router.get('/register',authController.viewRegister)
router.post('/register',authController.register)

module.exports = router;