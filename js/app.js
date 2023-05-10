async function testar(){
    var contador = 0
    for(var i = 0; i < 1000000000; i++){
        contador++
    }
    return "teste2"
}


console.log('teste1')

const teste = testar()

console.log(teste)
 
console.log("teste3")