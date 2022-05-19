var btnEstoque = document.querySelector("#btn-estoque");
var ambientes = document.querySelector("#ambientes-home");
var ambienteSelecionado = localStorage.getItem('valueText');



btnEstoque.addEventListener('click', function () {
    var ambienteSelecionado = ambientes.value;
    localStorage.setItem('valueText', ambienteSelecionado);
    console.log(ambienteSelecionado);
    window.location.href = "index.html";
 })
 

