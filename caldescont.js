prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do produto: ");
let preço = prompt("Digite o preço original: ");
let porcento = prompt("Digite a porcentagem do desconto: ");
let desconto = parseFloat(preço) * parseFloat(porcento) / 100;
let total = parseFloat(preço) + parseFloat(desconto);

console.log("Nome do produto: " + nome);
console.log("Preço original: " + preço);
console.log("Valor do desconto: " + desconto);
console.log("Valor final: " + total);