// somar os valores e dar desconto nos produtos acima de 30

const car = [10, 20, 30, 40, 50]

let caixa = 0

const somarValores = car.forEach(item => {

    if(item >= 30) {
        const finalValue = caixa += (item - desconto(item, 10))

        return finalValue
    }else {
        caixa += item
    }
})

console.log(caixa)

function desconto (valor, desconto) {
    const count = (valor * desconto) / 100

    return count
}



/*let finalValue = 0

car.forEach(value => {

    if(value >= 30) {
        finalValue = finalValue + (value - calcDescout(value, 10))
    }else {
        finalValue = finalValue + value
    }
});

console.log(finalValue)

// 250 pra 10% de desconto ?
// 250 * 10 = 2500 / 100 -> 25 desconto

function calcDescout (valor, desconto) {
 
    return (valor * desconto) / 100
}
*/