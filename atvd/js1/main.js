//primeiro log:
console.log('Fala ae rapaziada');
console.warn('pare, olhe, escute');
console.error('fez merda, se vira');
console.clear();

//primeira variavel:

let idade = 30;
const nome = 'Nico';
console.log(nome);
console.log(idade);
idade = 31;
console.log(idade);
console.log(nome, idade);

//string, numbers, boolean, null, undefined:

console.clear();
const nome_pessoa = 'Jonh';
const idade1 = '30';
const rating = 4.5;
const iscool = true;
const x = null;
const y = undefined;
let z;

//apresentando no console:

console.log(typeof nome_pessoa); //tipo de variavel
console.log(typeof idade1);
console.log(typeof rating);
console.log(typeof iscool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//concatenar strings:

console.clear();
const pessoa = 'Nipponic';
const idade2 = 17;

//apresentando no console:

console.log('Meu nickname é ' + pessoa +' e eu tenho '+ idade2 + ' anos!')

//concatenar usando template strings:

console.clear();
const hello = `Meu nome é ${pessoa} e eu tenho ${idade2} anos!`;

//apresentando no console:

console.log(hello);

//Operadores de comparação e lógico:

console.clear();
let teste1 = 1;
let teste2 = 0;
let valor1 = true;
let valor2 = false;

//apresentando no console:

console.log(teste1 > teste2);
console.log(teste1 < teste2);
console.log(teste1 && teste2);
console.log(valor1 && valor2);

