/*
2 tipos de funções:

    function sum (valor, valor2) { -> tipo void (vazia)
    
        console.log(valor + valor2)
    
    }
    console.log(sum(10, 20) + " resultado") -> 30 undefined (não me retorna nada)


    function sum(valor, valor2) { -> função educada retorna alguma coisa pra quem chamou

        return valor + valor2

    }

    console.log(sum(10, 20) + " resultado") -> 30 "resultado"


*/

//produtos acima de 30 dar 10% de desconto  -> []
// somar todos os produtos   -> [ok]

const card = [10, 244, 99, 2, 20, 33, 250]

let valorFinalComDesconto = 0 // como se fosse o caixa registarndo os valores 
let valorFinalSemDesconto = 0

card.forEach(value => {

    if(value >= 30) { // se meu produto for mais de 30 eu tenho que dar o desconto
        const desc = calcularDesconto(value, 10) //value = card[10,244,...], 10 valor de desconto
        valorFinalComDesconto = valorFinalComDesconto + (value - desc) // valor final menos o desconto
    }else {
        valorFinalComDesconto += value // 0 + 10 = 10 + 244 = 254 etc... somando os valores 
    }
});

card.forEach(value => {
    valorFinalSemDesconto = valorFinalSemDesconto + value //valor total sem desconto
});

function economizou (valor, valor2) { // qunato economizou
    const result = valor - valor2
    return result
}

// 250 pra 10% = 
//250 * 10 / 100 -> valor do desconto

function calcularDesconto (valor, desconto) {

    const result = (valor * desconto) / 100

    return result // quero que me retorne isso quando eu chamar
}


console.log(`total R$${valorFinalSemDesconto},
    com desconto R$${valorFinalComDesconto}
    você economizou R$${economizou(valorFinalSemDesconto, valorFinalComDesconto).toFixed(2)}`)