/*
FOR

    inicialização - cria uma variavel e coloca um valor para ela ;

    condição - enquanto for true, o laço continua interando;

    expressão final - o que irá ocorrer cada vez que o laço der uma volta

    for(inicialização; condição; expressão final)

        obs = quase todo codigo for a expressão "inicialização" é abreviada para "i"

*/

for(let i = 0; i <= 10; i++) {

   // console.log(i)

}

const users = [
    "Ana",
    "Bia",
    "Cauê",
    "Diego",
]

// length -> tamanho do array -> mostra quantas posições ele tem no caso = 4

for(let i = 0; i < users.length; i++) {
    console.log(users[i])
}