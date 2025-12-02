/*

JEITO MODERNO DE USAR FUNCTIONS

    FUNCTION padrão -> function nameF () {}
    arrow FUNCTION ->  () => {}

    obs: não escrevemos function;
         usamos as "=>" para indicar função 
*/

function sayMyName (name) {
    return `meu nome é ${name}`
}

const sayMyName2 = name => `meu nome é ${name}` // () -> opcional se só tiver um parametro 
                                                //  e se a função só tiver uma linha o return é altomatico 

const sum = (value, value2) => {
    return value + value2   // tem que colocar o return caso a function tiver + de 1 linha 
}                                                

console.log(sayMyName("Diego"))
console.log(sayMyName2("Lucas"))
console.log(sum(5,5))

//função anonima function sem nome (ou) arrow function