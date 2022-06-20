//Crie um objeto com os seus dados pessoais
//Deve possuir pelo menos duas propriedades: nome, sobrenome
var eu = {
    nome: "Luan",
    sobrenome: "Silva"
}
console.log(eu)

//Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
};
console.log(eu.nomeCompleto());

//Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi"
}

carro.preco = 3000;
console.log(carro.preco);

//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos de idade, que late
// ao ver um homem

var cachorro = {
    raca: "Labrador",
    cor: "Preto",
    idade: 10,
    latir(pessoa){
        if(pessoa === "Homem"){
            return "Latir"
        }else{
            return "Nada"
        }
    }
}
console.log(cachorro.latir(" "));