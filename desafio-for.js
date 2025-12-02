const button = document.querySelector(".button")

function mostrarNumber () {

    const input = document.querySelector(".input")
    const p = document.querySelector(".p")

    const catalogo = [
        {name:"Diego", number: "(17) 99618-4413"},
        {name:"Ana", number: "(18) 5555-5555"},
        {name:"Lucas", number: "(19) 4444-4444"},
        {name:"Maria", number: "(11) 9999-9999"}
    ]

    for(let i = 0; i < catalogo.length; i++) {

        if(input.value.toLowerCase() === catalogo[i].name.toLowerCase()) { // toLowerCase tranforma as letras em minusculas
            p.innerHTML = `Nome: ${catalogo[i].name} Tel: ${catalogo[i].number}` 

            break //caso meu for ache o nome o break faz ele parar de rodar 
        }else {
            p.innerHTML = "contato não encontrado"
        }
    }
}

button.addEventListener("click", mostrarNumber)