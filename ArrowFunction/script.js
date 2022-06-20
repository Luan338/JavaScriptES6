// Mostre no console cada paragrafo do site

const paragraph = document.querySelectorAll("p");

console.log(paragraph);

paragraph.forEach((item) => {
    console.log("Paragrafo:", item);
})


// Mostre o texto dos paragrafos no console

paragraph.forEach((item) => {
    console.log("Texto do paragrafo:", item.innerText);
})

// Corrigindo os erros abaixo

const img = document.querySelectorAll("img");

img.forEach((item, index) =>{
    console.log(item, index)
});

let i = 0;
img.forEach( () => {
    console.log(i++)
});

img.forEach(() => i++);

console.log(i)