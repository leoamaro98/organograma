var tabela = document.querySelector("#tabela");
var btnExport = document.querySelector('.btn-export');
var getToken = sessionStorage.getItem('valueTextToken');
let ambienteSelecionado = sessionStorage.getItem('valueText');
import { selecionaImagem } from './seleciona-logo.js'
import { montaTabela, limpaTabela } from './monta-tabela.js'
import { controls, state } from './paginacao.js'


const html = {
    get(element) {
        return document.querySelector(element)
    }
}

window.onload = function () {

    if (getToken != null) {
        selecionaImagem(ambienteSelecionado);
        conectaEstoque(ambienteSelecionado, getToken, "1");
        $("#paginate").removeClass("invisivel");
        controls.createListeners();
    } else {
        window.location.href = "homepage.html";

    }
}


html.get("#btn-estoque").addEventListener('click', () => {
    let valorInput = html.get("#input-padrao").value


    if (html.get("#select-estoque").value == 1) {
        if (valorInput != "") {
            buscaProduto(ambienteSelecionado, getToken, valorInput);
            $("#section-table").removeClass("invisivel");
            html.get("#input-padrao").innerHTML = "";

        } else {
            $("#erro-busca").removeClass("invisivel");

        }

    } else {
        limpaTabela();
        conectaEstoque(ambienteSelecionado, getToken, "1");
        $("#paginate").removeClass("invisivel");
        $("#erro-busca").addClass("invisivel");


    }


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
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelector("#tabela"));

});


function buscaProduto(ambiente, token, produto) {
    const estoque = fetch(`http://35.231.237.151:8080/gateway/api/stock?products=${produto}&environment=${ambiente}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },

    }).then(function (response) {
        return response.json();
    }).then(function (produto) {
        var res = produto['protheus_data']['stock'][0];
        console.log("Produto: ", res);

        if (res == undefined) {
            $("#erro-busca").removeClass("invisivel");
            console.log("produto é", res)
        }
        else {
            limpaTabela();
            montaTabela(res, "produto");
            $("#erro-busca").addClass("invisivel");



        }


    })

}

export function conectaEstoque(ambiente, token, page) {
    //console.log(`Ambiente ${ambiente} e TOKEN ${token}`);

    const estoque = fetch(`http://35.231.237.151:8080/gateway/api/stock?&environment=${ambiente}&page=${page}&pageSize=10`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }).then(function (response) {
        return response.json();
    }).then(function (stock) {
        let resposta = stock['protheus_data']['stock'];
        let content = stock['protheus_data']
        state.totalPage = content.total_pages
        html.get("#pagina-total").textContent = `Página: ${state.page}/ ${state.totalPage} `
        console.log(state.page, state.totalPage)

        limpaTabela();

        resposta.forEach(function (produto) {
            montaTabela(produto, "estoque");
        });
    })

}
