
// 1- Escreva um programa que exiba a soma dos números de 1 a 10 no console.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
    
   // console.log(i + 1)
}

// 2- Escreva um programa que exiba os números pares de 1 a 20 no console.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (const numberPar of number) {

    if(numberPar % 2 === 0) {

       // console.log(`${numberPar} par`)
    }else {
        //console.log(`${numberPar} impar`)
    }
}

/* 3 - Escreva um programa que exiba os números de 1 a 100 no console,
    substituindo os múltiplos de 3 pela palavra "Fizz" e os múltiplos de 5 pela palavra "Buzz". 
    Para números que são múltiplos de ambos (3 e 5), exiba a palavra "FizzBuzz". */

const multiplosTresECinco = 100

for (let i= 0; i <= multiplosTresECinco; i++) {
    
    if(i % 3 === 0 && i % 5 === 0) {
       // console.log(`${i} - fizzBuzz`)
    }else if (i % 5 === 0) {
       // console.log(`${i} - buzz`)
    }else if (i % 3 === 0) {
       // console.log(`${i} - fizz`)
    }
}

// 4 - Escreva um programa que verifique se um número é primo e exiba o resultado no console.

/*
    um numero Primo é o numero que só pode ser dividido por ele mesmo e por 1 (sem resto)

    2 % 2 = 1 // 4 % 4 = 1
    2 % 1 = 2 // 4 % 1 = 4
    (primo)   // 4 % 2 = 2 (não é primo)
*/
const numberPrimo = (number) => {

    for(let i = 2; i <= Math.sqrt(number); i++) {

        if(number % i === 0) {
            return "Não é Primo"
        }
    }

    return "É Primo"
}

//console.log(numberPrimo(2))



// 5 - Escreva um programa que encontre o maior número em uma lista de números e exiba o resultado no console.

const numeros = [1, 2, 20, 15, 50, 90]

const maiorNumber = numeros.reduce((acc, item) => { // meu acumulador vai passando até pegar meu maior numero
   return acc > item ? acc : item 
}, 0)

console.log(maiorNumber)