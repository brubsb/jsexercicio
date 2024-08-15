prompt = require("prompt-sync")();

let val = parseFloat(prompt("Digite o valor da compra: "))
let par = parseInt(prompt("Digite o número de parcelas: "))
let ta = parseFloat(prompt("Digite a taxa de juros mensal: "))

let parcela = val / par

console.log("Número de parcelas: " + par)

let total = 0
let i = 0
 
for  (i = 1 ; i <= par; i++) {
    let parcelatx = parcela * ta / 100
    parcela = parcela + parcelatx
    formatado = parcela.toFixed(2)
    console.log(" " + i + "ºParcela :" + formatado)
}
