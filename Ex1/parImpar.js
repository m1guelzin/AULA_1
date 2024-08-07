const prompt = require('prompt-sync')();


let num = parseFloat(prompt("Digite um número: "))

if(num % 2 === 0){
    console.log("O número inserido é PAR")
}
else{
    console.log("O número inserido é IMPAR")
}