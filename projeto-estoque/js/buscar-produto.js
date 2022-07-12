import { selecionaImagem } from './seleciona-logo.js'
import {montaTabela} from './monta-tabela.js'


var btnBuscar = document.querySelector("#btn-buscarProduto");
var filtrarTabela = document.querySelector("#input-padrao");
var getToken = sessionStorage.getItem('valueTextToken');
var ambienteSelecionado = sessionStorage.getItem('valueText');
var erroBusca = document.querySelector("#erro-busca")
let tabela=document.querySelector("#tabela")



window.onload = function () {

    if (getToken != null) {
      selecionaImagem();
        
    } else {
        window.location.href = "homepage.html";

    }

}



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



btnBuscar.addEventListener('click', function () {
    var filtroTabelaValue = filtrarTabela.value;

    if (filtroTabelaValue == "") {
        erroBusca.classList.remove("invisivel")
    } else {
        buscaProduto(ambienteSelecionado, getToken, filtroTabelaValue);
        erroBusca.classList.add("invisivel")

    }
})