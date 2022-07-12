let width = screen.width;


export function montaTabela(pedido, tabelaMontada) {

    if (tabelaMontada == "pedido") {
        var pedidoTr = montaTr(pedido, tabelaMontada);

    } else if (tabelaMontada == "titulo") {
        var pedidoTr = montaTr(pedido, tabelaMontada);

    } else if (tabelaMontada == "produto" || tabelaMontada == "estoque") {
        var pedidoTr = montaTr(pedido, tabelaMontada);

    }
    var tabela = document.querySelector("#tabela")
    tabela.appendChild(pedidoTr);

}

function montaTr(produto, tabelaMontada) {
    var tableTr = document.createElement("tr");
    tableTr.classList.add("produto");


    if (tabelaMontada == "pedido") {
        tableTr.appendChild(montaTd(produto.code, "info-code", tabelaMontada));
        tableTr.appendChild(montaTd(produto.order_created_at, "info-order_created_at", tabelaMontada));
        tableTr.appendChild(montaTd(produto.client_short_name, "info-short_name", tabelaMontada));
        tableTr.appendChild(montaTd(produto.invoice_number, "info-invoice_number", tabelaMontada));
        tableTr.appendChild(montaTd(produto.invoice_series, "info-invoice_series", tabelaMontada));
        tableTr.appendChild(montaTd(produto.status, "info-status", tabelaMontada));
        tableTr.appendChild(montaTd("Danfe", "info-danfe", tabelaMontada));
        return tableTr;

    } else if (tabelaMontada == "titulo") {
        tableTr.appendChild(montaTd(produto.doc_number, "info-doc_number", tabelaMontada));
        tableTr.appendChild(montaTd(produto.customer_name, "info-customer_name", tabelaMontada));
        tableTr.appendChild(montaTd(produto.due_date, "info-due_date", tabelaMontada));
        tableTr.appendChild(montaTd(produto.sale, "info-sale", tabelaMontada));
        tableTr.appendChild(montaTd(produto.situation, "info-situation", tabelaMontada));
        tableTr.appendChild(montaTd(produto.customer_code, "info-customer_code", tabelaMontada));
        return tableTr;

    } else if (tabelaMontada == "produto" || tabelaMontada == "estoque") {

        if (width >= "480") {

            let representante = sessionStorage.getItem('valueRepType');

            if (representante == "U") {
                tableTr.appendChild(montaTd(produto.product, "info-product", tabelaMontada));
                tableTr.appendChild(montaTd(produto.product_erp, "info-producterp", tabelaMontada));
                tableTr.appendChild(montaTd(produto.description, "info-descricao", tabelaMontada));
                tableTr.appendChild(montaTd(produto.avaliable, "info-avaliable", tabelaMontada));
                tableTr.appendChild(montaTd(produto.open_order, "info-order", tabelaMontada));
                tableTr.appendChild(montaTd(produto.stock_balance, "info-balance", tabelaMontada));
                tableTr.appendChild(montaTd(produto.multiple_cd_bar, "info-multcdbar", tabelaMontada));
                tableTr.appendChild(montaTd(produto.amount_burden, "info-amount", tabelaMontada));
                tableTr.appendChild(montaTd(produto.box_quantity, "info-box", tabelaMontada));


            } else {
                tableTr.appendChild(montaTd(produto.product, "info-product", tabelaMontada));
                tableTr.appendChild(montaTd(produto.product_erp, "info-producterp", tabelaMontada));
                tableTr.appendChild(montaTd(produto.description, "info-descricao", tabelaMontada));
                tableTr.appendChild(montaTd(produto.stock_balance, "info-balance", tabelaMontada));
                tableTr.appendChild(montaTd(produto.multiple_cd_bar, "info-multcdbar", tabelaMontada));
                tableTr.appendChild(montaTd(produto.amount_burden, "info-amount", tabelaMontada));
                tableTr.appendChild(montaTd(produto.box_quantity, "info-box", tabelaMontada));
            }
        } else {
            tableTr.classList.add("produto");
            tableTr.appendChild(montaTd(produto.product, "info-product", tabelaMontada));
            tableTr.appendChild(montaTd(produto.stock_balance, "info-avaliable", tabelaMontada));
        }


        return tableTr;

    }
}

function montaTd(dado, classe, tabelaMontada) {
    var td = document.createElement("td");
    var btn = document.createElement("button");

    if (tabelaMontada == "pedido") {
        if (dado == "Danfe") {
            btn.textContent = dado;
            btn.setAttribute('id', 'btn-danfe');
            td.classList.add(classe);
            btn.classList.add("class-btn-danfe")
            td.appendChild(btn)

        } else {
            td.textContent = dado;
            td.classList.add(classe);
        }
    } else {
        td.textContent = dado;
        td.classList.add(classe);
    }


    return td;

}

export function limpaTabela() {
    var elmtTable = document.querySelector('#tabela');
    var tableRows = elmtTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var x = rowCount - 1; x > 0; x--) {
        elmtTable.removeChild(tableRows[x]);
    }
}
