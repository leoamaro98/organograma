var divCarregando = document.querySelector("#divCarregando")
var ambienteAtual = document.querySelector("#ambiente-atual")
var tabela = document.querySelector("#tabela")


function conectaEstoque(ambiente, token) {
    //console.log(`Ambiente ${ambiente} e TOKEN ${token}`);
    
    const estoque = fetch(`http://35.231.237.151:8080/gateway/api/stock?&environment=${ambiente}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }).then(function (response) {
        // console.log("Resposta do servidor", response)//promise
        return response.json();
    }).then(function (stock) {
        var resposta = stock['protheus_data']['stock'];
        var produtos = resposta;

        //console.log("Estoque: ", resposta);
        console.log("Produtos totais", produtos.length)
        produtos.forEach(function (produto) {

            adicionaPacienteNaTabela(produto);
        });
    })

}






