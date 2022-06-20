function handleKeyboard(event){
    console.log(event.key);
    if(event.key === "Escape"){
        console.log("Modal fechado");
        document.body.classList.toggle("fechado");
    }else if(event.key === "k"){
        console.log("Modal aberto");
        document.body.classList.toggle("aberto");
    }else{
        console.log('Tecla "k" para abrir Modal ou "Esc" para fechar Modal');
        document.body.classList.toggle("inicial");
    }
}

window.addEventListener("keydown", handleKeyboard);