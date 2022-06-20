function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(2));
// Fim 1============================================================================

function pi(){
    return 3.14;
}
var total = 5 * pi();
console.log(total);
// Fim 2============================================================================

function imc(peso, altura){
    var imc = peso / (altura * altura);
    return imc; 
}
console.log(imc(80, 1.8));
// Fim 3============================================================================

function corFavorita(cor){
    if(cor === "Amarelo"){
        return "Você gosta do Sol"
    }else if(cor === "Azul"){
        return "Você gosta do Céu"
    }else{
        return "Você não gosta de cores"
    }
}
console.log(corFavorita())
// Fim 4============================================================================

addEventListener("click", function(){
    console.log("oi")
})