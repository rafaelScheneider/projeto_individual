var express = require("express");
var router = express.Router();

var cartaController = require("../controllers/cartaController");

router.post('/cadastrar', function(req,res) {
    cartaController.cadastrar(req, res)
})


module.exports = router;