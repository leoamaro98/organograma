var ambientes = document.querySelector("#ambientes");
var ambienteSelecionado = localStorage.getItem('valueText');
var tabela = document.querySelector("#tabela");
var btnExport = document.querySelector('[data-js="btn-export"]');
var btReset = document.querySelector('#reset-table');

window.onload = function () {


    validaClick(ambienteSelecionado);
    console.log(ambienteSelecionado)
    ambienteAtual.textContent = `Estoque ${ambienteSelecionado}`;

};

btReset.addEventListener('click', function () {
    window.location.href = "homepage.html";
})

tabela.addEventListener('dblclick', function (event) {
    var codCom = $(event.target).text();
    if (codCom.substr(0, 1) == 'G') {
        console.log(codCom);
        window.open(`https://gauss.com.br/produtos/p/${codCom}`);

    } else
        console.log("Clique no campo Codigo Comercial");
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

btnExport.addEventListener('click', function () {
    exportTableToCsv();
});




function exportTableToCsv() {
    var tableRows = document.querySelectorAll("tr");
    const CSVString = Array.from(tableRows)
        .map(row => Array.from(row.cells)  
            .map(cell => cell.textContent)  //pega texto da cells
            .join(',')).join('\n') //separa por virgula

    btnExport.setAttribute(
        'href',
        `data:text/csvcharset=utf-8, ${encodeURIComponent(CSVString)}`)

    btnExport.setAttribute('download', 'estoque.csv')
}

