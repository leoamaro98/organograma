
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

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var msgErro = document.querySelector("#mensagens-erro");
    msgErro.innerHTML = "";
}


function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

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
        available: form.available.value,
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
    var produtoTr = document.createElement("tr");
    produtoTr.classList.add("produto");

    produtoTr.appendChild(montaTd(produto.product, "info-product"));
    produtoTr.appendChild(montaTd(produto.product_erp, "info-producterp"));
    produtoTr.appendChild(montaTd(produto.description, "info-descricao"));
    produtoTr.appendChild(montaTd(produto.available, "info-avaliable"));
    produtoTr.appendChild(montaTd(produto.open_order, "info-order"));
    produtoTr.appendChild(montaTd(produto.stock_balance, "info-balance"));
    produtoTr.appendChild(montaTd(produto.multiple_cd_bar, "info-multcdbar"));
    produtoTr.appendChild(montaTd(produto.amount_burden, "info-amount"));
    produtoTr.appendChild(montaTd(produto.box_quantity, "info-box"));

    return produtoTr;

}


function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

