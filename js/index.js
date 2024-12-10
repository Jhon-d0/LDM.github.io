// Menu-mobile

let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnmenu.addEventListener("click", ()=>{
    menu.classList.add("abrir-menu")
})

menu.addEventListener("click", ()=>{
    menu.classList.remove("abrir-menu")
})

overlay.addEventListener("click", ()=>{
    menu.classList.remove("abrir-menu")
})

// Portfolio

const imgs = document.getElementById("imgportfolio");
const img = document.querySelectorAll("#imgportfolio img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 550}px)`;
}

setInterval(carrossel, 2000);


// Serviços

let imgSlider = document.querySelectorAll(".slider-container .slider-box");
let btnProx = document.querySelector("#proxima");
let btnAnter = document.querySelector("#anterior");
let btnNav = document.querySelectorAll(".btn-nav-box .btn-nav");

let contadorImg = imgSlider.length;
let imgAtiva = 0;

btnProx.addEventListener("click", ()=>{
    imgAtiva++;
    if (imgAtiva >= contadorImg){
        imgAtiva = 0;
    }
    mostrarSlider();
})

btnAnter.addEventListener("click", ()=>{
    imgAtiva--;
    if(imgAtiva < 0){
        imgAtiva = contadorImg - 1;
    }
    
    mostrarSlider();
})


function mostrarSlider(){
    let antigaImg = document.querySelector(".slider-container .slider-box.ativo");
    let antigoBtnNav = document.querySelector(".btn-nav-box .btn-nav.ativo");

    antigaImg.classList.remove("ativo");
    antigoBtnNav.classList.remove("ativo");

    imgSlider[imgAtiva].classList.add("ativo");
    btnNav[imgAtiva].classList.add("ativo");
}

btnNav.forEach((btn, indice)=>{
    btn.addEventListener("click", ()=>{
        imgAtiva = indice
        mostrarSlider()
    })
})





