var database = require("../database/config")

function cadastrar(idUser, nome, mana, tipo, texto, poder, resist, cor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO carta (fkUser, nome, custo, tipo, cor, poder, resist, texto) 
        VALUES (${idUser},'${nome}','${mana}','${tipo}','${cor}' ,${poder},${resist},'${texto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};