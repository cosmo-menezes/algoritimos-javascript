//Objeto e suas propriedades
var obj = {
    nome: 'Francisco',
    idade: 25,
    profissao: 'Programador',
    estaTrabalhando: true,
};
//chamando a variável do objeto "obj";
console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);
//concatenando as propriedades do objeto
console.log("O Meu nome é " + obj.nome + ", tenho " + obj.idade + " anos de idade e trabalho como " + obj.profissao);

//alterando uma propriedade do objeto
obj.nome = 'Pedro';
console.log(obj.nome);
console.log(obj);

//criando uma propriedade dentro do objeto
obj.graduacao = true;
console.log(obj);