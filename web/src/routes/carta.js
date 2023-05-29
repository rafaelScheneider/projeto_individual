var express = require("express");
var router = express.Router();

var cartaController = require("../controllers/cartaController");

router.post('/cadastrar', function(req,res) {
    cartaController.cadastrar(req, res)
})

router.post('/listar', function(req,res) {
    cartaController.listar(req, res)
})

module.exports = router;