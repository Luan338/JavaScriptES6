//Verifique se a sua idade é maior do que a de algum parente
//Dependendo do resultado coloque no console "É maior", "É igual" ou "É menor"
var minhaIdade = 22;
var idadeNamorada = 20;

if(minhaIdade > idadeNamorada){
    console.log(`Minha idade ${minhaIdade} é maior que da minha namorada ${idadeNamorada}`);
}else if(minhaIdade === idadeNamorada){
    console.log(`Minha idade ${minhaIdade} é a mesma que da minha namorada ${idadeNamorada}`);
}else{
    console.log(`Minha idade ${minhaIdade} é menor que da minha namorada ${idadeNamorada}`);
}

//Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

//Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Luan";
var idade = 22;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(`nome: ${!!nome}, idade: ${!!idade}, Possui Doutorado: ${!!possuiDoutorado}, Emprego Futuro: ${!!empregoFuturo}, Dinheiro na Conta: ${!!dinheiroNaConta}`);

//Compare o total de habitantes do Brasil com China (valor em milhões)
// var brasil = 207;
var brasil = 207e6;
// var china = 1340;
var china = 1340e6;
console.log(`Brasil: ${brasil}, China: ${china}`);

//O que irá aparecer no console ?
if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}