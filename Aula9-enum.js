/*
ENUM -> empede de cometer erros, e cria seus valores só uma vez

ENUM_GAME -> padrao de escrita snake case (usado só quando for criar uma variavel enum)

recriar o desafio joquem...Po usando enum

1-pegar os valores dos botoes quando clicar neles
2-identificar qual valor de cada um pedra, papel ou tesoura, achando a escolha do humano
3-fazer um sorteador usando random, para achar a escolha da maquina
4-criar uma function que faça as escolhas de jogo usando if e else
5-alterar span quando ganhar ou perder 
6-usar o enum para criar os valores fixos
*/

const resultSpan = document.querySelector(".result-span")
const myPoints = document.querySelector(".myPoints")
const randomPoints = document.querySelector(".randomPoints")
const empate = document.querySelector(".empate")

const playHuman = (humanoEscolha) => { //passei minha propriedade aqui e nos botoes passo os argumentos
    playGame(humanoEscolha, playMaquina())
}

const ENUM_GAME = {
    PEDRA: "pedra",
    PAPEL: "papel",
    TESOURA: "tesoura",
}

const playMaquina = () => {
    const valueMaquina = [ENUM_GAME.PEDRA, ENUM_GAME.PAPEL, ENUM_GAME.TESOURA] // criei uma variavel com as opcoes da maquina

    const random = Math.floor(Math.random() * 3) // fiz o sorteador random * 3 usando o floor que arredonada para baixo
                                                    // ou seja sempre vai sortear de 0 a 2, pq nosso array comeca em 0 
    return valueMaquina[random] // chamo minha variavel e uso o sorteador dentro dela que vai me retornar os valores que eu quero
}

let win = 0
let louse = 0
let empated = 0

const playGame = (humano, maquina) => {
    if(humano === maquina) {
        empated++
        resultSpan.innerHTML = "empate"
        empate.innerHTML = empated
    }else if (
    (humano === ENUM_GAME.PEDRA && maquina === ENUM_GAME.TESOURA) ||
    (humano === ENUM_GAME.PAPEL && maquina === ENUM_GAME.PEDRA) ||
    (humano === ENUM_GAME.TESOURA && maquina === ENUM_GAME.PAPEL)) {
        win++
        resultSpan.innerHTML = "você GANHOU"
        myPoints.innerHTML = win
    }else {
        louse++
        resultSpan.innerHTML = "você PERDEU"
        randomPoints.innerHTML = louse
    }
}