const router = require('express').Router();
const { signup, signin } = require('../controller/admin/auth');
const { getResturants, addResturant, updateResturant } = require('../controller/resturantController');
const { uploadImage } = require('../controller/uploadController');
const upload = require("../utils/multer");
const { isAuthenticate } = require('../middlewire/common');

router.post('/admin/signup', signup);
router.post('/admin/signin', signin);
router.get('/resturants', getResturants);
router.post('/resturant', addResturant);
router.put('/resturant', updateResturant);
router.post('/upload', upload.single("image"), uploadImage);


module.exports = router;