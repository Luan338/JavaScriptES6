// Crie uma função para verificar se o valor é Truthy
function verificaValor(dado){
    return !!dado;
}
console.log(verificaValor(22));

// Crie uma função matemática que retorne o perimetro de um quadrado lembrando: perímetro
// é a soma dos quatro lados do quadrado
function perimetroQuadrado(l){
    return l * 4;
}
console.log(perimetroQuadrado(2));

//Crie uma função que retorne seu nome completo ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `Meu nome completo é: ${nome} ${sobrenome}`
}
console.log(nomeCompleto("Luan", "Silva"));

//Crie uma função que verifica se um número é par
function numberPar(num){
    if(num % 2 === 0){
        return `O número ${num} é par`
    }else{
        return `O número ${num} é ímpar`
    }
}
console.log(numberPar(7));

//Crie uma função que retorna o tipo de dado do argumento passado nela 
function tipoDado(tipo){
    return typeof tipo;
}
console.log(tipoDado("Olá, mundo!"))
