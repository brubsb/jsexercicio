prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do produto: ");
let preço = prompt("Digite o preço unitário: ");
let quant = prompt("Digite a quantidade comprada: ");
let val = parseFloat(preço) * parseFloat(quant);
let impos = parseFloat(val) * 18/100;
let total = parseFloat(val) + parseFloat(impos);

console.log("Nome do produto: " + nome);
console.log("Preço unitário: " + preço);
console.log("Quantidade comprada: " + quant);
console.log("Imposto total: " + impos);
console.log("Valor total da compra com imposto: " + total);