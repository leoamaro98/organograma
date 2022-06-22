
var ambientes = document.querySelector("#ambientes");
var tabela = document.querySelector("#tabela");
var btnExport = document.querySelector('.btn-export');
var btReset = document.querySelector('#reset-table');
var getSenha = sessionStorage.getItem('valueTextSenha');
var getToken = sessionStorage.getItem('valueTextToken');
var ambienteSelecionado = localStorage.getItem('valueText');



var btnBuscarProd = document.querySelector("#btn-consultaProdutos");

btnBuscarProd.addEventListener('click', () => {
    window.location.href = "buscar-produto.html";

})
window.onload = function () {

    if (getToken != null) {
        selecionaImagem();
        removeComponentes();
        conectaEstoque(ambienteSelecionado, getToken);
    } else {
        window.location.href = "homepage.html";

    }
}

btReset.addEventListener('click', function () {
    window.location.href = "homepage.html";
})

tabela.addEventListener('dblclick', function (event) {
    var codCom = $(event.target).text();
    const classCodCom = event.target.classList.value

    if (classCodCom == "info-product") {
        console.log(codCom);
        window.open(`https://gauss.com.br/produtos/p/${codCom}`);

    } else {
        console.log("Clique no campo Codigo Comercial");
        console.log(codCom);
    }
});

btnExport.addEventListener('click', function () {
    console.log("BTN PRESS")
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelector("#tabela"));

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

    btnExport.setAttribute('download', 'estoque.xls')
}




