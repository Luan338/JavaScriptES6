const lista = document.querySelector("ul");
console.log(lista.parentElement); // Vai buscando o pai do elemento
console.log(lista.nextElementSibling); // Pega o próximo elemento
console.log(lista.previousElementSibling); // Pega o elemento anterior


// CHILDREN
console.log(lista.children); // Mostra os elementos no HTMLCollection


const comidas = document.querySelector(".comidas");
const amarelo = document.querySelector(".amarelo");

function enviarCor(){
    comidas.appendChild(amarelo); // Enviar para o final da lista
}
amarelo.addEventListener("click", enviarCor);
