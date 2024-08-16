function verificarMedia() {

    var pro1 = parseInt(document.getElementById("1pro").value);
    var pro2 = parseInt(document.getElementById("2pro").value);
    var pro3 = parseInt(document.getElementById("3pro").value);
    var pro4 = parseInt(document.getElementById("4pro").value);

    let med = parseInt(pro1 + pro2 + pro3 + pro4) / 4;

    if(5 >= med > 7) {
        document.getElementById("resul").innerHTML = "Recuperação. Sua média é: " + med;
    } else if(med >= 7) {
        document.getElementById("resul").innerHTML = "Aprovado! Sua média é: " + med;
    } else if(med < 5) {
        document.getElementById("resul").innerHTML = "Reprovado. Sua média é: " + med;
    }
}