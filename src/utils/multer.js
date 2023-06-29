const multer = require('multer');
const upload = multer({storage})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images")
    },
    filename: function (req, file, cb) {
            console.log(file)
            cb(null, Date.now() + path.extname(file.originalname));
        }
});