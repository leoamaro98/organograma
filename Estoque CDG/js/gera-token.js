


url = "http://192.168.0.201:8090/rest/api/oauth2/v1/token?grant_type=password&password=fenixcdg@06&username=admin"


function geraToken(url){

    const token = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

       
    }).then(function(response){
        console.log("Resposta do Servidor", response);
        return response.json();
    }).then(function (token){
        resposta = token['access_token'];
        console.log("token é", resposta);
    })

}

