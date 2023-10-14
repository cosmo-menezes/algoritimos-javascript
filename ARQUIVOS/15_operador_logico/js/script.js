
var idade = 20;

var nome = "João";

if(nome == "João" && idade == 20){
    console.log("O ", nome, " tem ", idade, " anos e pode entrar na aula de natação")
} 
else{
    console.log("O ", nome, " tem ", idade, " anos de idade, e por isso não pode entrar na aula de natação");
}

//----------------------------------------------------------------------//


var aluno = "Jose";
var idades = 20;

if(aluno == "Jose" && idades == 20){
    console.log("O José pode entrar na aula");
}else{
    console.log("Esse não é o aluno José");
}

//----------------------------------------------------------------------//

if(1 == 1 && 3 > 2 && true){
    console.log("Passou");
}else{
    console.log("Reprovado");
}

if(1 != 2 && 5 == 5 && false){
    console.log("Passou");
} else{
    console.log("Não passou")
}