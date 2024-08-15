prompt = require("prompt-sync")();

let valor = prompt("Digite o valor total da compra: ");
let num = prompt("Digite o número de parcelas: ");
let resul = parseFloat(valor) / parseFloat(num);

console.log("Valor total: " + valor);
console.log("Número de parcelas: " + num);
console.log("Valor de cada parcela: " + resul);