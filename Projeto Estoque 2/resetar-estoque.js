var btReset = document.querySelector('#reset-table');
var tabble = document.querySelector('#tabela');
let trs = document.querySelector(".produto");


btReset.addEventListener('click', function () {
   location.reload();
})


//BOTAO 
botaoAdicionar.addEventListener("click", function () {
   var ambienteSelecionado = ambientes.value;
   validaClick(ambienteSelecionado);
});

