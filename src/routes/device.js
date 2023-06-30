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

router.get('/manager',checkLogin,deviceController.storedProduct)
router.get('/manager/trash',checkLogin,deviceController.trashProduct)
router.get('/create',checkLogin, deviceController.viewCreate)
router.post('/create',upload.single('image'), deviceController.create)
router.get('/:id/edit',checkLogin,deviceController.viewEdit)
router.put('/:id/edit',upload.single('image'),deviceController.update)
router.delete('/:id/delete',deviceController.destroy)
router.delete('/:id/delete/force',deviceController.destroyForce)
router.patch('/:id/restore',deviceController.restore)

router.get('/:slug',deviceController.getIphone)

module.exports = router