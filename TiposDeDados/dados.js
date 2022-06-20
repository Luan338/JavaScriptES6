// var nome = "Luan"; // STRING
// var idade = 22; // NUMBER
// var possuiFaculdade = true; // BOOLEAN
// var time; // Undefined
// var comida = null; // NULL -> NULO
// var simbolo = Symbol() // SYMBOL -> SIMBOLO
// var novoObjeto = {} // OBJECT -> OBJETO

// SOBRE STRINGS
var nome = "Luan";
var idade = 22;
console.log(typeof nome); // typeof nos diz o tipo da variável
console.log(typeof idade); // typeof nos diz o tipo da variável


//Podemos somar uma STRING, quando somamos a strings estamos CONCATENANDO
var nome = "Luan";
var sobreNome = "Eric";
var nomeCompleto = nome + '' + sobreNome;

console.log(nomeCompleto);

//Podemos somar uma STRING com NUMERO
var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase);

//Podemos somar um NUMERO com NUMERO
var ano = 2022;
let mes = 6;
console.log(ano + mes);

// PARA COLOCAR ASPAS EM STRINGS
var frase1 = "Esse é o 'melhor' jogo";
var frase2 = 'Esse é o "melhor" jogo';
var frase3 = "Esse é o \"melhor\" jogo";

// TEMPLATE STRING
var gols = 1000;
var fraseGol = `Romário fez ${gols} Gols`;


// EXERCÍCIOS

// 1. Declare um variável contendo uma STRING
var esporte = "Basquete";

// 2. Declare uma variável contendo um número dentro de uma STRING
var jogadorPreferido = "30";

// 3. Declare uma variável com a sua idade
var idade = 22;

// 4. Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var nome = "Luan", sobrenome = "Silva";
var somaNome = `${nome} ${sobrenome}`;

// 5. Coloque a seguinte frase em uma variável: Foco e determinação
var fraseMotivacional = "Foco e determinação";

// 6. Verifique o tipo da variavel que contem o nome
typeof nome;