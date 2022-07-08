// arrays sao objetos mas sao usados como listas
// pode ter itens de qualquer tipo
// Nao contem chave e valor, e sim indice


var cores = ['azul', 'amarelo', 'preto', 'rosa'] // cada item(cor) e um indice
console.log(cores)
console.log(cores[3]) //retorna o valor de indice 3(rosa)


// arrays tambem recebem objetos'
var alunos = [
    {nome:'Gabriel', idade:17},
    {nome:'Lucas', idade:18}
]
console.log(alunos)
console.log(alunos[0].idade)