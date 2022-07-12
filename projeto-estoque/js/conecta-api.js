var divCarregando = document.querySelector("#divCarregando")
var ambienteAtual = document.querySelector("#ambiente-atual")
var tabela = document.querySelector("#tabela")
import {montaTabela,limpaTabela} from './monta-tabela.js'
import {state} from './paginacao.js'

const html = {
    get(element) {
        return document.querySelector(element)
    }
}









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