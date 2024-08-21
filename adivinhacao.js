prompt = require("prompt-sync")();

const numerosecre = Math.floor(Math.random() * 100) + 1;
let palpite;
let tentativas = 0;

while (palpite !== numerosecre) {
    palpite = parseInt(prompt("Digite um número de 1 a 100: "));
    tentativas ++;

    if(palpite >100 || palpite < 1){
        console.log("Por favor, insira um número válido.")
    } else if(palpite < numerosecre) {
        console.log("O número é maior! Tente novamente.");
    } else if(palpite > numerosecre) {
        console.log("O número é menor! Tente novamente.");
    } else if(palpite === numerosecre) {
        console.log("Parabéns! Você acertou o número em " + tentativas + " tentativas.");
        break;
    } else {
        console.log("Por favor, insira um número válido.")
    }
}