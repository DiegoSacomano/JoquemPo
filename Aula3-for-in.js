/*
FOR IN 
    estrutura de repetição - loop

        -ele serve para iterar objetos (iterar - pegar item por item do meu objto)


    key -> nome da variavel poderia ser qualquer um "abacate"

    in -> coloca o nome da variavel do objeto    


    obs: geralmente ele só pega as chaves do objeto
*/

const myObject = {name: "Diego", age: "22", street: "Ana da Silva Ferraz"}

//console.log(myObject.name) -> Diego valor de name

//console.log(myObject["name"]) -> Diego valor de name 

for (const key in myObject) {

    console.log(`${key} : ${myObject[key]}`)

                //ou// 

   // console.log(myObject[key]) -> mostra só os valores
}