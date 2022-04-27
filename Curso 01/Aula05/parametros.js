
//Parametros de funcao
            //2     //2
function soma(num1, num2){
    return num1 + num2;
}


console.log(soma(2,2))


// parametros x argumentos

function nomeIdade(nome, idade){
return `Meu nome é ${nome} e eu tenho ${idade} anos`
}


console.log(nomeIdade("Leonardo", 23));


function mult(mult1=1 , mult2=1){
return mult1 * mult2;

}


console.log(mult(soma(4,5)))