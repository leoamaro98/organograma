var titulo = document.querySelector(".titulo");
titulo.textContent = "Leo Amaro Nutrition";
let imc = 0;

var todosPacientes = document.querySelectorAll(".paciente");


for(var i =0; i< todosPacientes.length; i++){
    var paciente = todosPacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido){
        tdImc.textContent = "Peso Inválido!"
        paciente.classList.add("paciente-invalido");
        pesoValido = false;
    }

    if (!alturaValida){
        tdImc.textContent = "Altura Inválida!"
        paciente.classList.add("paciente-invalido");
        alturaValida = false;
    }
    
    if(alturaValida && pesoValido){
        imc = calculaIMC(peso,altura)
        tdImc.textContent = imc;


    }

}	

function calculaIMC(peso, altura){
    imc = peso / (altura*altura);
    return imc.toFixed(2);

}

function validaPeso(peso){
    
    if (peso >=0 && peso <500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >=0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}