var btnBuscar = document.querySelector("#btn-buscarProduto");
var filtrarTabela = document.querySelector("#filtrar-tabela");
var getToken = sessionStorage.getItem('valueTextToken');
var ambienteSelecionado = localStorage.getItem('valueText');
var ambienteAtual = document.querySelector("#ambiente-atual");
var erroBusca = document.querySelector("#erro-busca")


btnBuscar.addEventListener('click', function () {
    var filtroTabelaValue = filtrarTabela.value;

    if (filtroTabelaValue == "") {
        erroBusca.classList.remove("invisivel")
    } else {
        buscaProduto(ambienteSelecionado, getToken, filtroTabelaValue);
        erroBusca.classList.add("invisivel")

    }
})

window.onload = function () {
    barraProgresso();
    ambienteAtual.textContent = `Consulta Produto ${ambienteSelecionado}`;

}

function barraProgresso() {
    $("#divCarregando").show();
    $("#section-table").addClass("invisivel");
}

function carregaTabela() {
    $('#divCarregando').fadeOut('slow');
    $("#section-table").removeClass("invisivel");
}


function buscaProduto(ambiente, token, produto) {
    const estoque = fetch(`http://35.231.237.151:8080/gateway/api/stock?products=${produto}&environment=${ambiente}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },

    }).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (produto) {
        var res = produto['protheus_data']['stock'][0];
        console.log("Produto: ", res);

        if (res == undefined) {
            erroBusca.classList.remove("invisivel")
            console.log("produto é", res)
        }
        else {
            adicionaProdutoTabela(res);
            erroBusca.classList.add("invisivel")
            carregaTabela();

        }


    })

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