
var ambientes = document.querySelector("#ambientes");
var botaoAdicionar = document.querySelector("#buscar-paciente");
var tabela = document.getElementById("table");
var ambienteSelecionado =  localStorage.getItem('valueText');
var ambienteAtual = document.querySelector("#ambiente-atual")

window.onload = function() {
   
    validaClick(ambienteSelecionado);
    console.log(ambienteSelecionado)
    ambienteAtual.textContent = `Estoque ${ambienteSelecionado}`;
    
  };


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


function conectaEstoque(ambiente, token) {
    //console.log(`URL ${url} e TOKEN ${token}`);

    const estoque = fetch(`http://35.231.237.151:8080/gateway/api/stock?&environment=${ambiente}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })

        .then(function (response) {
            //console.log("Resposta do servidor", response)//promise
            return response.json();
        })
        .then(function (stock) {
            var resposta = stock['protheus_data']['stock'];
            var produtos = resposta;

            console.log("Estoque: ", resposta);
            produtos.forEach(function (produto) {

                adicionaPacienteNaTabela(produto);
            });
            return produtos;
        })

}


function geraToken(ambiente) {

    const token = fetch(`http://35.231.237.151:8080/gateway/api/token?environment=${ambiente}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": "admin",
            "password": `fenix${ambiente}@07`
        })

    }).then(function (response) {
        console.log("Resposta do Servidor", response);
        return response.json().then(function (token) {

            resposta = token['protheus_data']['access_token'];
            console.log("token é", resposta);
            conectaEstoque(ambiente, resposta)
            return resposta;
        })

    })

}


