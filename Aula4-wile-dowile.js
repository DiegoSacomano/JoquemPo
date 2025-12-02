/*
ESTRUTURA DE REPETIÇÃO - LOOP

    while - verifica se é TRUE, e faz

    do while - faz, depois verifica se é TRUE

obs: ambos fazem praticamente a mesma coisa 

let i = 0

while (i < 10) { // condição 
    i++
    console.log(`numero : ${i}`) //depois executa
}

-----------------------------------------------------------------

do { // executa 
    
    i++
    console.log(`number : ${i}`)

} while (i < 10); // depois a condição
*/

const button = document.querySelector(".button")

function mostrarContato () {
    const input = document.querySelector(".input")
    const p = document.querySelector(".p")

    const contact = [
        {name:"Diego", number: "17 9999-9999"},
        {name:"Lucas", number: "17 5555-9999"},
        {name:"Ana", number: "17 3333-9999"},
        {name:"Leticia", number: "17 7777-9999"},
    ]

    let i = 0

    while (i < contact.length) {
        
        if(input.value.toLowerCase() === contact[i].name.toLowerCase()) {

            p.innerHTML = `Nome: ${input.value}, Tel: ${contact[i].number}`

            break // break garante que não fique iterando infinitamente 

        }else if (input.value == "") {

            p.innerHTML = "Por favor digite um nome"

        }else {
            p.innerHTML = `Nome: ${input.value} não encontrado`
        }

        i++ // o i++ no final garante que ele continue iterando após ser executado
    } 

}

button.addEventListener("click", mostrarContato)