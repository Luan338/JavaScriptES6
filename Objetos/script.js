var pessoa = {
    nome: 'Luan',
    idade: 22
}

// MÉTODOS

var quadrado = {
    lados: 4,
    // 1º forma area: function(lado){
    //     return lado * lado;
    // },
    area(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado
    }
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(2));