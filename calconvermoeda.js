function conversormoeda() {

    var valbr = parseFloat(document.getElementById("valor").value);
    var moeda = document.getElementById("moeda").value;

    switch (moeda) {
        
        case 'Dólar Americano': resultado = valbr / 5.0;
        break;
        
        case 'Euro': resultado = valbr / 5.5;
        break;
        
        case 'Libra Esterlina': resultado = valbr / 6.0;
        break;

        case 'Iene': resultado = valbr / 0.037;
        break;

        case 'Franco Suíço': resultado = valbr / 6.27;
        break;

        case 'Yuan Renminbi': resultado = valbr / 0.76;
        break;

        case 'Peso Argentino': resultado = valbr / 0.0057;
        break;

        case 'Lira Turca': resultado = valbr / 0.16;
        break;

        case 'Won': resultado = valbr / 0.0041;
        break;

        case 'Coroa Dinamarquesa': resultado = valbr / 0.80;
        break;

    }

    document.getElementById("resul").innerHTML = valbr + " BRL = " + resultado.toFixed(2) + " " + moeda;

}