const myPoints = document.querySelector(".myPoints")
const empate = document.querySelector(".empate")
const randomPoints = document.querySelector(".randomPoints")
const resultSpan = document.querySelector(".result-span")
const resetBtn = document.querySelector(".reset")
const imgHuman = document.querySelector(".img-human")
const imgAlexa = document.querySelector(".img-alexa")

const playHuman = (selectedOption, imagem) => {

    const imgCaixa = {
        1: "./assets/pedra-JoquemPo.webp",
        2: "./assets/papel-joquemPo.jpg",
        3: "./assets/tesoura-joquemPo.webp"
    }

    playGame(selectedOption, playMaquina())

    imgHuman.src = imgCaixa[imagem]
    imgHuman.style.display = "block"

    resetBtn.style.display = "block"
}

const playMaquina = () => {

    const options = ["pedra", "papel", "tesoura"]

    const radoom = Math.floor(Math.random() * 3)

    if (options[radoom] === "pedra") {
        imgAlexa.src = "./assets/pedra-JoquemPo.webp"
        imgAlexa.style.display = "block"

    } else if (options[radoom] === "papel") {
        imgAlexa.src = "./assets/papel-joquemPo.jpg"
        imgAlexa.style.display = "block"

    } else {
        imgAlexa.src = "./assets/tesoura-joquemPo.webp"
        imgAlexa.style.display = "block"

    }

    return options[radoom]

}

let win = 0
let louse = 0
let empated = 0

function playGame(human, maquina) {

    if (human === maquina) {
        empated++
        empate.innerHTML = empated
        resultSpan.innerHTML = "Deu EMPATE"
        resultSpan.style.color = "#fbee00ff"

    } else if (human === "pedra" && maquina === "tesoura") {
        win++
        myPoints.innerHTML = win
        resultSpan.innerHTML = "Você GANHOU"
        resultSpan.style.color = "#00fb21ff"

    } else if (human === "papel" && maquina === "pedra") {
        win++
        myPoints.innerHTML = win
        resultSpan.innerHTML = "Você GANHOU"
        resultSpan.style.color = "#00fb21ff"

    } else if (human === "tesoura" && maquina === "papel") {
        win++
        myPoints.innerHTML = win
        resultSpan.innerHTML = "Você GANHOU"
        resultSpan.style.color = "#00fb21ff"

    } else {
        louse++
        randomPoints.innerHTML = louse
        resultSpan.innerHTML = "Você PERDEU"
        resultSpan.style.color = "#fd0606ff"
    }

    encerrarPartida()

}

const encerrarPartida = () => {
    if (win === 5) {
        alert("Parabéns! Você venceu a partida!")
        reset()
    }
    if (louse === 5) {
        alert("Que pena! Você perdeu a partida!")
        reset()
    } else if (empated === 10) {
        alert("A partida terminou em empate!")
        reset()
    }
}

const reset = () => {
    win = 0
    louse = 0
    empated = 0

    randomPoints.innerHTML = 0
    myPoints.innerHTML = 0
    empate.innerHTML = 0
    resultSpan.innerHTML = ""
    resetBtn.style.display = "none"
    imgHuman.style.display = "none"
    imgAlexa.style.display = "none"
}