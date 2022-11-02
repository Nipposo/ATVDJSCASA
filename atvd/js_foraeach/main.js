//For each:
console.log('oi');

const frutas = [ 'apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao);

function minhaFuncao(item, index) {
    console.log(`Índice: ${index}`);
    console.log(`Elemento: ${item}`);
}

//For each com o arrow Function:

//
console.clear();
//

const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((index, item) => {
    console.log(`Índice: ${index}`);
    console.log(`Elemento: ${item}`);
});

//For each com array de objetos:

//
console.clear();
//

const tarefas = [
    {
        id: 1,
        text: 'levar o lixo para fora',
        isCompleted: true,
    },

    {
        id: 2,
        text: 'Encontrar com o chefe',
        isCompleted: true,
    },

    {
        id: 3,
        text: 'Consultar o dentista',
        isCompleted: false,
    },
];

tarefas.forEach((teste) => console.log(teste.text));
tarefas.forEach((teste) => console.log(teste.isCompleted));

//Método map():

//
console.clear();
//

const numeros = [4, 9, 16, 25];

const newArray = numeros.map(Math.sqrt);

console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);

//Outro exemplo do Map:

//
console.clear();
//

const mapText = tarefas.map((valor) => {
    return valor.text;
});

//Imprime o novo array
console.log(mapText);




