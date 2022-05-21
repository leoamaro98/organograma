var divCarregando = document.querySelector("#divCarregando")
var ambienteAtual = document.querySelector("#ambiente-atual")
var tabela = document.querySelector("#tabela")


function conectaEstoque(ambiente, token) {
    //console.log(`URL ${url} e TOKEN ${token}`);


    const estoque = fetch(`http://35.231.237.151:8080/gateway/api/stock?&environment=${ambiente}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }).then(function (response) {
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


function geraToken(getUser, getSenha, ambiente) {

    const token = fetch(`http://35.231.237.151:8080/gateway/api/token?environment=${ambiente}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": `${getUser}`,
            "password": `${getSenha}`
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
