const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/siteController');

router.get('/search/device', siteController.searchDevice);
router.get('/', siteController.home);

module.exports = router;