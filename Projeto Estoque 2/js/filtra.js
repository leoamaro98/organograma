
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    var produtos = document.querySelectorAll(".produto");

    if (this.value.length > 0) {
        for (var i = 0; i < produtos.length; i++) {
            if (width >= "480") {
                var produto = produtos[i];
                var tdProdutoComercial = produto.querySelector(".info-product");
                var nomeProdutoComercial = tdProdutoComercial.textContent;

                var tdProdutoErp = produto.querySelector(".info-producterp");
                var nomeProdutoErp = tdProdutoErp.textContent;
                var expressao = new RegExp(this.value, "i");

                if (!expressao.test(nomeProdutoErp) || !expressao.test(nomeProdutoComercial)) {
                    produto.classList.add("invisivel");
                }
                if (expressao.test(nomeProdutoErp) || expressao.test(nomeProdutoComercial)) {
                    produto.classList.remove("invisivel");
                }

            }else{
                var produto = produtos[i];
                var tdProdutoComercial = produto.querySelector(".info-product");
                var nomeProdutoComercial = tdProdutoComercial.textContent;
                if (!expressao.test(nomeProdutoErp)) {
                    produto.classList.add("invisivel");
                }
                if (expressao.test(nomeProdutoErp)) {
                    produto.classList.remove("invisivel");
                }
            }
        }
    } else {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            produto.classList.remove("invisivel");

        }

    }

});


