// JSON
// Chaves e valor // cojuntos e valores em uma variavel
// {chave:valor} cada cojunto recebe o nome de propriedade

var obj = {
    nome: 'Junior',
    idade: 19,
    profissao:  'Programador'
};

console.log(obj);
console.log(typeof obj);

console.log(obj.profissao); //acessar valor de uma propriedade especifica do obj
console.log('Meu nome e ' + obj.nome)

obj.nome = 'Matheus' // mudar valor de uma propriedade
console.log(obj)

obj.trabalhando = true