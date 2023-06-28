const express = require('express')
const router = express.Router()
const deviceController = require('../app/controllers/deviceController')


router.get('/:slug',deviceController.getIphone)

module.exports = router