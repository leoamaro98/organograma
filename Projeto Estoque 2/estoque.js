var ambientes = document.querySelector("#ambientes");
var ambienteSelecionado = localStorage.getItem('valueText');
var tabela = document.querySelector("#tabela");

window.onload = function () {

    validaClick(ambienteSelecionado);
    console.log(ambienteSelecionado)
    ambienteAtual.textContent = `Estoque ${ambienteSelecionado}`;

};

var btReset = document.querySelector('#reset-table');
var tabble = document.querySelector('#tabela');
let trs = document.querySelector(".produto");


btReset.addEventListener('click', function () {
   window.location.href = "homepage.html";
})

tabela.addEventListener('dblclick', function(event) {
    var codCom = $(event.target).text();
    console.log(codCom);
    window.open(`https://gauss.com.br/produtos/p/${codCom}`);
});


function validaClick(ambienteSelecionado) {
    let ambiente;
    if (ambienteSelecionado == "GAUSS") {
        ambiente = "gauss"

    } else if (ambienteSelecionado == "CDG") {
        ambiente = "cdg"
        console.log(`Ambiente selecionado é ${ambienteSelecionado}`);


    } else if (ambienteSelecionado == "SPG") {
        ambiente = "spg"
        console.log(`Ambiente selecionado é ${ambienteSelecionado}`);


    } else {
        ambiente = "nsg"
        console.log(`Ambiente selecionado é ${ambienteSelecionado}`);

    }

    geraToken(ambiente);
    return ambiente;

}

