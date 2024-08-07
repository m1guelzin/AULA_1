const prompt = require('prompt-sync')();

let lista = [];

let tamanho = parseFloat(prompt("Digite quantos números serão inseridos na lista: "))

for(let i = 0; i < tamanho; i++){
    let numero = parseFloat(prompt("Digite os números da lista: "));
    lista.push(numero);
}

console.log("Lista completa", lista)


