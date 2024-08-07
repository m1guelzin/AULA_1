const prompt = require('prompt-sync')();


let nota = parseFloat(prompt("Digite a nota do aluno: "))

if(nota < 0){
}
else{
if(nota < 4 && nota >= 0){
    console.log("O aluno está Reprovado!!")
}
else if(nota < 6){
    console.log("O aluno está de Recuperação!!")
}
else if(nota >= 6 && nota < 11){
    console.log("O aluno está Aprovado!!")
}
}