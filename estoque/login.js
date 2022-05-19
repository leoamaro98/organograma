var btnEstoque = document.querySelector("#btn-estoque");
var ambientes = document.querySelector("#ambientes-home");


btnEstoque.addEventListener('click', function () {
    var ambienteSelecionado = ambientes.value;
    localStorage.setItem('valueText', ambienteSelecionado);
    console.log(ambienteSelecionado);
    window.location.href = "index.html";
 })
 
