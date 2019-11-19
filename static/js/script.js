var Tela = new Vue({
    el: "#teste",
    data: {
        meio: "",
    },
});

function salvar(data) {
    var aux = "";
    var retornar = "";
    $(".botao").addClass("mostrar");
    $("#voltar").removeClass("mostrar");
    boletim = "";
    var ajuuj = data[96] + data[97];
    var ujaaj = data[5] + data[6];
    for(var i = 0; i < data.length; i++) {
        aux = data[i] + data[i + 1] + data[i + 2] + data[i + 3] + data[i + 4] + data[i + 5] + data[i + 6] + data[i + 7];
        if (aux == "<table c") {
            for (var l = i; l < data.length; l++) {
                boletim += data[l];
                aux = data[l] + data[l - 1] + data[l - 2];
                if (aux == ">el") { i = l; break; }
            }
        }
    }
    if (local == "/notas") {
        for (var i = 0; i < boletim.length; i++) {
            aux = boletim[i] + boletim[i + 1];
            if (aux == ujaaj) { i += 1; }
            else if (aux == ajuuj) { i += 1; }
            else { retornar += boletim[i]; }
        }
    } else if (local == "/faltas") {
        // retornar = "<p>Faltas não separadas</p>";
        // retornar = boletim;
        for (var i = 22450; i < boletim.length; i++) {
            aux = boletim[i] + boletim[i + 1] + boletim[i + 2] + boletim[i + 5];
            console.log(aux + " -> " + i);
            if (aux == 'E8;>') { Tela.meio =  "Você tem " + boletim[i + 6] + boletim[i + 7] + boletim[i + 8] + boletim[i + 9] + " de faltas!"; break; }
        }
        retornar = ""
    } else if (local == "/hello") { 
        retornar = "<p>Notas não separadas</p>";
        // retornar = boletim;
    }
    return retornar;
}
function voltar() {
    $(".botao").removeClass("mostrar");
    $("#voltar").addClass("mostrar");
    Tela.meio = "";
    return "";
}