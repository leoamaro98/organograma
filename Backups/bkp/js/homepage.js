
var ambientes = document.querySelector("#ambientes");
var botaoAdicionar = document.querySelector("#buscar-paciente");
var tabela = document.getElementById("table");




function validaClick(ambienteSelecionado) {
    let url, token;
    if (ambienteSelecionado == "GAUSS") {
        url = "http://179.108.122.43:8093/rest/stocksg"
        urlGeraToken = "http://179.108.122.43:8093/rest/api/oauth2/v1/token?grant_type=password&password=fenixgauss@06&username=admin"
        geraToken(urlGeraToken, url);

    } else if (ambienteSelecionado == "CDG") {
        url = "http://179.108.122.43:9990/rest/stocksg"
        urlGeraToken = "http://179.108.122.43:9990/rest/api/oauth2/v1/token?grant_type=password&password=Mo@3789v&username=mobiz.integracao "
        console.log(`Ambiente selecionado é ${ambienteSelecionado}`);
        geraToken(urlGeraToken, url);


    } else if (ambienteSelecionado == "SPG") {
        url = "http://179.108.122.43:9990/rest/stocksg"
        urlGeraToken = "http://179.108.122.43:8096/rest/api/oauth2/v1/token?grant_type=password&password=fenixspg@06&username=admin"
        console.log(`Ambiente selecionado é ${ambienteSelecionado}`);
        geraToken(urlGeraToken, url);


    } else {
        url = "http://179.108.122.43:8094/rest/stocksg"
        urlGeraToken = "http://179.108.122.43:8094/rest/api/oauth2/v1/token?grant_type=password&password=fenixnsg@06&username=admin";
        console.log(`Ambiente selecionado é ${ambienteSelecionado}`);
        geraToken(urlGeraToken, url);


    }
    //Retorna URL e TOKEN do ARRAY

    //  conectaEstoque(url, token);
    
}

function conectaEstoque(url, token) {
    //console.log(`URL ${url} e TOKEN ${token}`);

    const estoque = fetch(url, {
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
            var resposta = stock['stock'];
            var produtos = resposta; 1

            console.log("Estoque: ", stock);
            produtos.forEach(function (produto) {

                adicionaPacienteNaTabela(produto);
            });
            return produtos;
        })

}


function geraToken(urlGeraToken, url) {

    const token = fetch(urlGeraToken, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },


    }).then(function (response) {
        console.log("Resposta do Servidor", response);
        return response.json();
    }).then(function gerar(token) {
        resposta = token['access_token'];
       //console.log("token é", resposta);
        conectaEstoque(url, resposta)
        return resposta;
    })


}


//BOTAO 
botaoAdicionar.addEventListener("click", function () {
    
    var ambienteSelecionado = ambientes.value;
    validaClick(ambienteSelecionado);

});

