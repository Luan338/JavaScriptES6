//Existem 2 valores Booleanos false ou true;

var possuiGraduacao = false;
var possuiDoutorado = false;


if(possuiGraduacao){
    console.log("Tem graduação!");
}else if(possuiDoutorado){
    console.log("Tem Doutorado!");
}else{
    console.log("Não tem ensino superior!");
}

var condicional = (5 - 10) && (5 + 5);
if(condicional){
    console.log("Verdadeiro", condicional);
}else{
    console.log("Falso");
}

var condicional2 = (5 - 5) || (5 + 5);
if(condicional2){
    console.log("Verdadeiro", condicional2);
}else{
    console.log("Falso");
}