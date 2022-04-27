var btnAdicionar = document.querySelector("#adicionar-paciente")
btnAdicionar.addEventListener("click", monstraMensagem)

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

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)

    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}


function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) erros.push("Nome nao pode ser em branco");
    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida!");
    if (paciente.gordura.length == 0) erros.push("Gordura nao pode ser em branco");
    if (paciente.peso.length == 0) erros.push("Peso nao pode ser em branco");
    if (paciente.altura.length == 0) erros.push("Altura nao pode ser em branco");
    return erros;

}

