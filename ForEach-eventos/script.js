const imgs = document.querySelectorAll('img');

function imgSrc(event){
    const alt = event.currentTarget.getAttribute('alt');
    console.log(alt);
}

imgs.forEach((img) => {
    img.addEventListener("click", imgSrc);
});

