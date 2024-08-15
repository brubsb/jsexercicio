prompt = require("prompt-sync")();

let hora = prompt("Digite o número de horas trabalhadas por semana: ");
let valorh = prompt("Digite o valor da hora trabalhada: ");
let salse = parseInt(hora) * parseFloat(valorh);
let valmes = parseFloat(salse) * 4;

console.log("Salário semanal: " + salse);
console.log("Salário mensal: " + valmes);