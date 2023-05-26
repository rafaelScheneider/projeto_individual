var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function cadastrar(req, res) {
    var idUser = req.body.idUserServer
    var nome = req.body.nomeServer
    var mana = req.body.manaServer
    var tipo = req.body.tipoServer
    var texto = req.body.textoServer
    var poder = req.body.poderServer
    var resist = req.body.resistServer
    var cor = req.body.corServer

    usuarioModel.cadastrar(idUser, nome, mana, tipo, texto, poder, resist, cor).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        /*Erro caso consulta */
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
}

module.exports = {
    cadastrar,
    entrar
}