

//declara function      //para   //return da function
const apresentarArrow = nome => {`meu nome é ${nome}`};


//declara fun //parametros  //return
const soma = (num1, num2) => num1 + num2;


//arrow function com mais de uma linha

const somaNumerosPequenos = (num1, num2) => {
if (num1 || num2 > 10){
        return "somente números de 1 a 9" 
    }else{
        return num1 + num2;
    }
      
}

//HOISTING: Arrow function se comporta da mesma forma que expressao