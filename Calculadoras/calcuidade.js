prompt = require("prompt-sync")();

let nascimento = prompt("Digite seu ano de nacimento: ");
let ano = new Date().getFullYear();
let resul = parseFloat(ano) - parseFloat(nascimento);

console.log("Sua idade é: " + resul);