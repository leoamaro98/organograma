import { selecionaImagem } from './seleciona-logo.js'
let ambienteSelecionado = sessionStorage.getItem('valueText');
var getToken = sessionStorage.getItem('valueTextToken');
import { montaTabela, limpaTabela } from './monta-tabela.js'



window.onload = function () {

    if (getToken == null) {
        window.location.href = "homepage.html";

    }

    conectaPedidos(ambienteSelecionado, getToken, 1, pesquisa.nomeCnpj)
    selecionaImagem(ambienteSelecionado);
    controls.createListeners();


}


const html = {
    get(element) {
        return document.querySelector(element)
    }
}

const state = {
    page: 1,
    totalPage: ""
}


const pesquisa = {
    nomeCnpj: ""

}

const controls = {

    createListeners() {
        html.get("#first").addEventListener('click', () => {
            conectaPedidos(ambienteSelecionado, getToken, 1, pesquisa.nomeCnpj);
            console.log("Primeiro")
            state.page = 1;
            // html.get("#divCarregando").classList.remove("invisivel");
            progressBarDanfe("4000")


        })

        html.get("#next").addEventListener('click', () => {
            state.page++;
            if (state.page > state.totalPage) {
                state.page--;
                conectaPedidos(ambienteSelecionado, getToken, state.page, pesquisa.nomeCnpj);
            } else
                conectaPedidos(ambienteSelecionado, getToken, state.page, pesquisa.nomeCnpj);

            progressBarDanfe("4000")

        })

        html.get("#prev").addEventListener('click', () => {
            state.page--;

            if (state.page <= 1) {
                state.page = 1;
                conectaPedidos(ambienteSelecionado, getToken, state.page, pesquisa.nomeCnpj);

            } else
                conectaPedidos(ambienteSelecionado, getToken, state.page, pesquisa.nomeCnpj);
            progressBarDanfe("4000")


        })


    }
}


html.get("#input-cnpj").addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        let inputValue = html.get("#input-cnpj").value;
        pesquisa.nomeCnpj = `&searchKey=${inputValue}`;
        conectaPedidos(ambienteSelecionado, getToken, 1, pesquisa.nomeCnpj)
    }

})

html.get("#tabela").addEventListener("click", function (event) {
    const classBtnDanfe = event.target.classList.value
    if (classBtnDanfe == "class-btn-danfe") {

        console.log(classBtnDanfe);
        console.log("Botao clicado")

        const trDanfe = event.target.parentElement.parentElement
        const tdNota = trDanfe.childNodes[3].innerHTML
        const tdSerie = trDanfe.childNodes[4].innerHTML

        buscaDanfe(ambienteSelecionado, getToken, tdNota, tdSerie)
        progressBarDanfe("12000");

    }

})

function conectaPedidos(ambiente, token, page, nomeCnpj) {
    // console.log(`Ambiente ${ambiente} e TOKEN ${token}`);
    const estoque = fetch(`http://35.231.237.151:8080/gateway/api/order?environment=${ambienteSelecionado}&page=${page}&pageSize=10${nomeCnpj}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },

    }).then(function (response) {
        if (response.status != 200) {
            html.get("#erro-padrao").classList.remove("invisivel")
            return response.json();


        } else {
            html.get("#erro-padrao").classList.add("invisivel")
            return response.json();

        }

    }).then(function (stock) {

        var pedidos = stock['protheus_data']['content'];
        var content = stock['protheus_data']
        state.totalPage = content.total_pages
        console.log(pedidos)
        html.get("#pagina-total").textContent = `Página: ${state.page}/ ${state.totalPage} `

        limpaTabela();
        pedidos.forEach(function (pedido) {
            montaTabela(pedido, "pedido");
        });

    })



}

function buscaDanfe(ambiente, token, nota, serie) {
    const danfe = fetch(`https://portal.faraway.com.br/gateway/api/danfe/${nota}/serie/${serie}?environment=${ambiente}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },

    }).then(function (response) {
        return response.json();

    }).then(function (stock) {
        console.log("Aguarde, carregando danfe")
        var danfe = stock['protheus_data']['danfe'];
        downloadPDF(danfe, nota);
        // var content = stock['protheus_data']

    })


}


function downloadPDF(pdf, nota) {
    const linkSource = `${pdf}`;
    const downloadLink = document.createElement("a");
    const fileName = `danfe-${nota}.pdf`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}





function progressBarDanfe(segundoTimeout) {
    const barraProgresso = html.get("#barra-progresso")
    const divProgresso = html.get("#div-progresso")

    barraProgresso.classList.add('progress-bar')
    divProgresso.classList.add('progress')

    setTimeout(() => {
        barraProgresso.classList.remove('progress-bar')
        divProgresso.classList.remove('progress')

    }, segundoTimeout);

}

