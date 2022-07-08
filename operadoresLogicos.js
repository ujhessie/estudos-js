// retornam valores como true ou false
// muito usado nas estruturas de condicao

// ============= && ou AND ===================
// retorna true somente se as duas expressoes forem verdadairas
var n = 19
if( n<20 && n>18){
    console.log('As duas expressoes sao verdadeiras')
}



// =============== || ou OR ===================
// retorna true caso qualquer uma das duas expressoes for verdadeira
var nome = 'Joao'
var idade = 18
if ((nome == 'Alex') || (idade >= 18)) {
    console.log('Ok. situacao verdadeira')
} 
if(nome == 'Joao' && idade > 16 || idade == 18){
    console.log('As duas condicoes sao verdadeiras')
}


// =========== ! ou NOT ================
// operador de negacao; caso a expressao retornar 'true' o operador retorna 'false' e vice versa

var n2 = 15
if (!(n2==15)){
    console.log('passou')
}