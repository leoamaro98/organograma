var btnLogin = document.querySelector("#btn-estoque");
var ambientes = document.querySelector("#ambientes-home");
var ambienteSelecionado = localStorage.getItem('valueText');
var erroAjaxa = document.querySelector("#erro-ajax");
var usuario = document.querySelector("#usuario");
var senha = document.querySelector("#senha");


btnLogin.addEventListener('click', function () {
    amarzenaVariaveis();

})

function login(getUser, getSenha, ambienteSelecionado) {
    const token = fetch(`http://35.231.237.151:8080/gateway/api/token?environment=${ambienteSelecionado}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": `${getUser}`,
            "password": `${getSenha}`
        })

    }).then(function (response) {
        console.log("Dentro login")
        salvaUser = null;
        salvaSenha = null;
        console.log(salvaSenha, salvaUser);
        if (response.status == 200) {
            return response.json().then(function (token) {
                resposta = token['protheus_data']['access_token'];
                sessionStorage.setItem('valueTextToken', resposta);
                validaAcesso(resposta, ambienteSelecionado);


                // window.location.href = "buscar-produto.html"; //redireciona para tabela estoque 

            })
        } else{
            console.log("usuario e senha incorretos");
            erroAjaxa.classList.remove("invisivel");
        }
    })


}

function amarzenaVariaveis() {
    var ambienteSelecionado = ambientes.value;
    var salvaUser = usuario.value;
    var salvaSenha = senha.value

    sessionStorage.setItem('valueText', ambienteSelecionado);

    login(salvaUser, salvaSenha, ambienteSelecionado);
}

function validaAcesso(token, ambienteSelecionado) {
    const estoque = fetch(`http://35.231.237.151:8080/gateway/api/representative?environment=${ambienteSelecionado}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }).then(function (response) {
        console.log(response.status);
        return response.json();
    }).then(function (res) {
        console.log(res.status)
        if (res.status == 409) {
            console.log(res.status)
            representanteType = "U"
        }
        else {
            representanteType = res['protheus_data'].type
        }
        sessionStorage.setItem('valueRepType', representanteType);
        window.location.href = "index.html";
    })
}

