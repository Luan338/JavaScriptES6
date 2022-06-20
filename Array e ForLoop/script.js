let videoGames = ["Switch", "PS4", 'XBOX'];

// Métodos e propriedades de um array
console.log(videoGames.pop()); // Remove o último item e retorna ele
console.log(videoGames.push('3DS')); // Adiciona ao final de um array
console.log(videoGames.length); // 3

// Existem map, reduce, forEach

// COMEÇANDO FOR LOOP
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// LOOP COM WHILE
// var i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// ATENÇÃO: precisa colocar o incremento(numero++) se não entra no loop infinito
for(let numero = 0; numero <= 10; numero++){
    console.log(numero);
}

let tecnologias = ["JavaScript", "React", "CSS", "HTML"];

for(let item = 0; item < tecnologias.length; item++){
    console.log(tecnologias[item]);
    if(tecnologias[item] === "CSS"){
        break;
    }
}


// Crie um array com os anos que o Brasil ganhou a copa
//1959, 1962, 1970, 1994, 2002
let anos = [1959, 1962, 1970, 1994, 2002];

//Interaja com o array utilizando um loop para mostrar a seguinte mensagem: `O Brasil ganhou a
// copa de ${ano}`
for(let i = 0; i < anos.length; i++){
    console.log(`O Brasil ganhou a copa de ${anos[i]}`)
}

//Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for(let fruta = 0; fruta < frutas.length; fruta++){
    console.log(frutas[fruta]);
    if(frutas[fruta] === "Pera"){
        break;
    }
}
// Coloque a ultima fruta do array acima em uma variável sem remover a mesma do Array
let ultimoItem = frutas[frutas.length - 1];
console.log(ultimoItem);
