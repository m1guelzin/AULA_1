const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Digite a temperatura em CELSIUS, para conversão em FAHTRNHEIT: "))

var fahren = (celsius*9/5)+32

console.log("A temperatura em Fahrenheit é",fahren)

