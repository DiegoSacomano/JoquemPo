/*
FUNTION
    -pode receber argumentos ou parametros

    ex: 

    funtion sum (valor1, valor2) {
    
        console.log(valor1 + valor2)
    
    }

    sum(10, 20) -> 30

*/

/*
function myName(name, sobrenome) {
    console.log(`meu nome é ${name}, e o sobrenome é ${sobrenome}`)
}

myName("Diego", "Sacomano")
*/

function sum(valor = 1, valor2 = 1) { //posso passar valores padroes para os parametros
  console.log(valor + valor2)

}

//sum(10, 20)

function sub(valor, valor2) {
    console.log(valor - valor2)
}

//sub(10, 5)

function div(valor, valor2) {
    console.log(valor / valor2)
}

//div(20, 2)

function mult(valor, valor2) {
    console.log(valor * valor2)
}

//mult(20, 2)

function raiz(valor, valor2) {
    console.log(Math.sqrt(valor, valor2))
}

//raiz(25, 2)

function pow(valor, valor2) {
    console.log(Math.pow(valor, valor2))
}

pow(20, 2)