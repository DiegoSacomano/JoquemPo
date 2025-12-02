/*
FOR OF 

    estrutura de repetição - loop

    for (const element of object) { -> element (o que quero fazer pegar letra por letra ou nome do array)

        (o que vai ser executado)

    }

    obs: não preciso passar uma condição para ele parar o for of para sozinho

    ex:

    const myName = "Diego"
    const array = ["Ana", "Maria", "Alice"]

    for (const name of array) {
        console.log(name)
    }
*/

const button = document.querySelector(".button")

function mostrarConatato () {

    const input = document.querySelector(".input")
    const p = document.querySelector(".p")

    const contacts = [
        {name:"Diego", number: "(17) 99618-4413"},
        {name:"Ana", number: "(18) 5555-5555"},
        {name:"Lucas", number: "(19) 4444-4444"},
        {name:"Maria", number: "(11) 9999-9999"}
    ]

    for (const nameContacts of contacts) {

        if(input.value.toLowerCase() === nameContacts.name.toLowerCase()) {
            p.innerHTML = `name: ${nameContacts.name} Tel: ${nameContacts.number}`

            break
        }else {
            p.innerHTML = `Contato de ${input.value} não encontrado`
        }
    }

}


button.addEventListener("click", mostrarConatato)