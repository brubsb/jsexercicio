prompt = require("prompt-sync")();

let idade = prompt("Digite sua idade: ")

if(70 > idade > 15) {
    console.log("Seu voto é obrigatório.");
} else if(idade <= 15 ) {
    console.log("Seu voto não é obrigatório.");
} else if(idade >= 70) {
    console.log("Seu voto é opcional.");
}