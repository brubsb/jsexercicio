prompt = require("prompt-sync")();

let cels = prompt("Digite a temperatura em C°: ");
let resul = parseFloat(cels) * 9/5 + 32;

console.log("Graus em Fahrenhei:" + resul + "°");