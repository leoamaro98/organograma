import { selecionaImagem } from './seleciona-logo.js'
import {montaTabela, limpaTabela} from './monta-tabela.js' 



let ambienteSelecionado = sessionStorage.getItem('valueText');
let getToken = sessionStorage.getItem('valueTextToken');



window.onload = function () {
    selecionaImagem(ambienteSelecionado);
    conectaTitulo(ambienteSelecionado, getToken, "1")
    

}

const html = {
    get(element) {
        return document.querySelector(element)
    }
}


html.get("#btn-titulo").addEventListener('click', function () {
    let codCli = html.get("#input-codCli").value
    conectaTitulo(ambienteSelecionado, getToken, "1")

})

function conectaTitulo(ambiente, token, page) {
    //  console.log(`Ambiente ${ambiente} e TOKEN ${token}`);
    const estoque = fetch(`https://portal.faraway.com.br/gateway/api/bill/toPay/?environment=${ambiente}&page=${page}&pageSize=1000`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },

    }).then(function (response) {
        console.log(response)
        if (response.status != 200) {
            html.get("#erro-padrao").classList.remove("invisivel")


        } else {
            html.get("#erro-padrao").classList.add("invisivel")
            return response.json();

        }

    }).then(function (stock) {

        var pedidos = stock['protheus_data']['content'];
        // var content = stock['protheus_data']

        console.log(pedidos)

        // state.totalPage = content.total_pages
        // html.get("#pagina-total").textContent = `Página: ${state.page}/ ${state.totalPage} `
        limpaTabela();

         pedidos.forEach(function (pedido) {
            montaTabela(pedido,"titulo");
         });

    })

}