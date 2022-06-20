// NÚMEROS
var idade = 22;
var gols = 1000;
var pi = 3.14; // Utilizamos o ponto para números decimais
var exp = 2e10; // Expoênte, a quantidade que vier após o e sera a quantidade de zeros.

// OPERADORES ARITMÉTICOS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 2 x 2 x 2 x 2 = 16
var modulo = 14 % 5; // É o resto da divisão 4
// Não tem como dividir 14 por 5, ai dividiremos o 10 e resta o 4.

// Lembrando que a soma entre strings serve para concatenar

// OPERADORES ARITMÉTICOS EM STRINGS
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50 Consegue porque não tem como subtrair uma string de outra
var multiplicacao = '100' * '2'; // 200 Consegue porque não tem como subtrair uma string de outra
var divisao = 'Comprei 10' / 2; // NaN (not a number)

// A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5 // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
//(Parentese) para priorizar uma expressão


// EXERCÍCIOS

//Qual o resultado da seguinte expressão ?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

//Crie duas expressões que retornem NaN
var exp1 = "R$";
var exp2 = 20;
var somaExp = exp2 + exp1;
console.log(somaExp / 4);
console.log(somaExp - 4);

//Somar a string '200' com o número 50 e retornar 250
var stringSoma = '200';
var number2 = 50;
var somaDosDois = Number(stringSoma) + number2;
console.log(somaDosDois);

//Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
++x;
console.log(x)

//Como dividir o peso por 2 ?
// var numero = '80';
// var unidade = 'kg';
// var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN
var numero = '80';
var unidade = 'kg';
var pesoPorDois = numero / 2;
console.log(`${pesoPorDois} ${unidade}`);