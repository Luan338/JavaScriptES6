// addEventListener("click", (e) => {
//     console.log(e.target)
// })

const lista = document.querySelector("ul");

function executarCallback(e){
    console.log("Primeiro evento:", e.currentTarget); // this
    console.log("Segundo evento:", e.target); // Onde cliquei
    console.log("Terceiro evento:", e.type); // Tipo de evento
    console.log(e.path); // Caminho até onde eu cliquei
}

lista.addEventListener("click", executarCallback);

const h1 = document.querySelector("h1");

function handleEvent(e){
    console.log("Evento de:", e.type);
    console.log("Evento:", e);
}

h1.addEventListener("click", handleEvent);
h1.addEventListener("mouseenter", handleEvent);
h1.addEventListener("mousemove", handleEvent);

window.addEventListener("scroll", handleEvent); // Rolar a página
window.addEventListener("resize", handleEvent); // Diminuir a tela
window.addEventListener("keydown", handleEvent); // Clicar com alguma tecla


