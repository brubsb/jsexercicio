prompt = require("prompt-sync")();

let idade = prompt("Digite sua idade: ")

if(idade >= 18) {
    console.log("Você é maior de idade e tem permissão para entrar no evento!")
} else {
    console.log("Você é menor de idade e não tem permissão para entrar no evento!")
}