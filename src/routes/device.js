const path = require('path');
const multer = require('multer');
const express = require('express')
const router = express.Router()
const deviceController = require('../app/controllers/deviceController')
const checkLogin = require('../app/middlewares/checkLogin')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "src/public/images")
    },
    filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname));
        }
});
const upload = multer({storage})

router.get('/manager',deviceController.storedProduct)
router.get('/create',checkLogin, deviceController.viewCreate)
router.post('/create',upload.single('image'), deviceController.create)
router.get('/:id/edit',deviceController.viewEdit)
router.put('/:id/edit',deviceController.update)

router.get('/:slug',deviceController.getIphone)

module.exports = router