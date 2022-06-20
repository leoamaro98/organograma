let width = screen.width;
function monstraMensagem(event) {
    event.preventDefault();
    console.log("Botao Clicado")

    var form = document.querySelector("#form-adiciona");

    // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteForm(form);
    //cria a TR e a TD do paciente

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemErro(erros); 
        form.reset();
        return;

    }

    form.reset();
    var msgErro = document.querySelector("#mensagens-erro");
    msgErro.innerHTML = "";
}


function adicionaProdutoTabela(produto) {

    var pacienteTr = montaTr(produto);
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);

}



function adicionaPacienteNaTabela(produto) {
    if (produto.avaliable != 0) {
    console.log('Estoque disponivel')

        var pacienteTr = montaTr(produto);
        var tabela = document.querySelector("#tabela-pacientes")
        tabela.appendChild(pacienteTr);

    }
}


function exibeMensagemErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });

}


function obtemPacienteForm(form) {

    var produto = {
        description: form.descric.value,
        open_order: form.open_order.value,
        avaliable: form.avaliable.value,
        product: form.product.value,
        product_erp: form.product_erp.value,
        stock_balance: form.stock_balance.value,
        box_quantity: form.box_quantity.value,
        amount_burden: form.amount_burden.value,
        multiple_cd_bar: form.multiple_cd_bar.value,

    }
    return produto;
}

function montaTr(produto) {
    var representante = sessionStorage.getItem('valueRepType');
    var produtoTr = document.createElement("tr");

    if (width >= "480") {
        produtoTr.classList.add("produto");

        if (representante == 'M' || representante == 'C' || representante == 'A') {
            produtoTr.appendChild(montaTd(produto.product, "info-product"));
            produtoTr.appendChild(montaTd(produto.product_erp, "info-producterp"));
            produtoTr.appendChild(montaTd(produto.description, "info-descricao"));
            produtoTr.appendChild(montaTd(produto.stock_balance, "info-balance"));
            produtoTr.appendChild(montaTd(produto.multiple_cd_bar, "info-multcdbar"));
            produtoTr.appendChild(montaTd(produto.amount_burden, "info-amount"));
            produtoTr.appendChild(montaTd(produto.box_quantity, "info-box"));

        } else {
            produtoTr.appendChild(montaTd(produto.product, "info-product"));
            produtoTr.appendChild(montaTd(produto.product_erp, "info-producterp"));
            produtoTr.appendChild(montaTd(produto.description, "info-descricao"));
            produtoTr.appendChild(montaTd(produto.avaliable, "info-avaliable"));
            produtoTr.appendChild(montaTd(produto.open_order, "info-order"));
            produtoTr.appendChild(montaTd(produto.stock_balance, "info-balance"));
            produtoTr.appendChild(montaTd(produto.multiple_cd_bar, "info-multcdbar"));
            produtoTr.appendChild(montaTd(produto.amount_burden, "info-amount"));
            produtoTr.appendChild(montaTd(produto.box_quantity, "info-box"));
        }

    } else {
        produtoTr.classList.add("produto");
        produtoTr.appendChild(montaTd(produto.product, "info-product"));
        produtoTr.appendChild(montaTd(produto.stock_balance, "info-avaliable"));
    }


    return produtoTr;

}


function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;

}

function removeComponentes() {
    var representante = sessionStorage.getItem('valueRepType');

    var estoque = document.querySelector('[name="estoque"]')
    var pedido = document.querySelector('[name="pedidoAberto"]')
    if (representante == 'M' || representante == 'C' || representante == 'A') {
        estoque.parentNode.removeChild(estoque);
        pedido.parentNode.removeChild(pedido);
    }
    console.log("Dentro remove componentes", representante);

}