var btnEstoque = document.querySelector("#btn-estoque");
var ambientes = document.querySelector("#ambientes-home");
var ambienteSelecionado = localStorage.getItem('valueText');
var erroAjaxa = document.querySelector("#erro-ajax");


var usuario = document.querySelector("#usuario");
var senha = document.querySelector("#senha");


btnEstoque.addEventListener('click', function () {
    amarzenaVariaveis();

})

function login(getUser, getSenha, ambienteSelecionado) {
    //${ambiente}
    const token = fetch(`http://35.231.237.151:8080/gateway/api/token?environment=${ambienteSelecionado}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": `${getUser}`,
            "password": `${getSenha}`
        })

    }).then(function (response) {
        // console.log(response)
        if (response.status == 200) {
            return response.json().then(function (token) {
                resposta = token['protheus_data']['access_token'];
                console.log(token)
                sessionStorage.setItem('valueTextToken', resposta);
                validaAcesso(resposta, ambienteSelecionado);

                //console.log("Token é", resposta)
                // window.location.href = "buscar-produto.html"; //redireciona para tabela estoque 

            })
        } else if (response.status == 401) {
            console.log("usuario e senha incorretos");
            erroAjaxa.classList.remove("invisivel");
        }
    })

}

function amarzenaVariaveis() {
    var ambienteSelecionado = ambientes.value;
    var salvaUser = usuario.value;
    var salvaSenha = senha.value

    localStorage.setItem('valueText', ambienteSelecionado);
    sessionStorage.setItem('valueTextUser', salvaUser);
    sessionStorage.setItem('valueTextSenha', salvaSenha);

    var getUser = sessionStorage.getItem('valueTextUser');
    var getSenha = sessionStorage.getItem('valueTextSenha');

    login(getUser, getSenha, ambienteSelecionado);
}


function validaAcesso(token, ambienteSelecionado) {
    console.log("Token é", token)
    const estoque = fetch(`http://35.231.237.151:8080/gateway/api/representative?environment=${ambienteSelecionado}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }).then(function (response) {
        //console.log(response);
        return response.json();
    }).then(function (res) {
        representanteType = res['protheus_data'].type
        sessionStorage.setItem('valueRepType', representanteType);
        window.location.href = "index.html"; //redireciona para tabela estoque 
    })
}

