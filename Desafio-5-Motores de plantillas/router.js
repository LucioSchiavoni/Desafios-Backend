const express = require("express");
const router = express.Router();
const productos = require("./products.json")



router.get('/', (req, res) => {
    res.render('index');

})

module.exports = router;
