prompt = require("prompt-sync")();

let nume1 = prompt("Digite o primeiro número: ");
let nume2 = prompt("Digite o segundo número: ");
let resul = parseFloat(nume1) - parseFloat(nume2);

console.log("Diferença dos números: " + resul);