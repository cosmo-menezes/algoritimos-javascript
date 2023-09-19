// Exemplo 1
/* 
Prototype funciona como uma herança, sempre que um objeto é criado, 
ele tambem terá a propriedade __proto__ inserida nele.
*/
//Veja o Prototype na prática:

class Pessoa{}

Pessoa.prototype.falar = function(){
    console.log("Olá");
}

const pedro = new Pessoa;

pedro.falar();
/*Nesse caso, qualquer objeto criado a partir da classe Pessoa, terá acesso ao método falar,
que está no Prototype da mesma. 
*/

// Exemplo 2
class Pessoas{
    constructor(nome, idade){
        this.nome;
        this.idade;
    }
}
const gabriel = new Pessoas("Pedro", 21);
console.log(gabriel.nome, gabriel.idade);
