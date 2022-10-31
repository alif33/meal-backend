const router = require('express').Router();
const { 
    getCategories, 
    addCategory,
    addProduct,
    Importer, 
    Deletation

 } = require("../controller/menuController");



router.get('/menu/categories', getCategories);
router.post('/menu/category', addCategory);
router.post('/menu/product', addProduct);
router.post('/menu/import', Importer);
router.post('/menu/drop', Deletation);

module.exports = router;