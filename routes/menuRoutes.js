const router = require('express').Router();
const { 
    getCategories, 
    addCategory,
    addProduct,
    Importer

 } = require("../controller/menuController");



router.get('/menu/categories', getCategories);
router.post('/menu/category', addCategory);
router.post('/menu/product', addProduct);
router.post('/menu/import', Importer);

module.exports = router;