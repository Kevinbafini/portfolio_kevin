// btn menu mobile

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// btn de voltar ao topo 

window.onscroll = function() {
    scrollFunction();
};

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnVoltarAoTopo").style.display = "block";
    } else {
        document.getElementById("btnVoltarAoTopo").style.display = "none";
    }
};

document.getElementById("btnVoltarAoTopo").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};