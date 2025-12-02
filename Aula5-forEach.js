/*
    FOREACH - estrtura de repetição

    array.forEach(element => {   -> foreach vem plugado na variavel 
    
        console.log(codigo aqui)
    });

    obs: foreach(item, index, array) -> recebe tres parametros que voce pode usar ou não

    intem ou element -> mostra o intem por item;
    index -> mostra a posição do array (0, 1, 2, 3);
    array -> mostra o array todo;

*/

const catalogo = [
    {name:"Diego", age: 22, contact: "(17) 99618-4413"},
    {name:"Ana", age: 23, contact: "(18) 5555-5555"},
    {name:"Lucas", age: 18, contact: "(19) 4444-4444"},
    {name:"Maria", age: 25, contact: "(11) 9999-9999"}
]

catalogo.forEach((item, index) => {
    console.log(`${index + 1}) nome: ${item.name}, idade: ${item.age}, numero: ${item.contact}` )
});
