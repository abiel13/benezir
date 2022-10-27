function scrollAppear(){
    var item = document.querySelectorAll('.sscat')
    let wheight = window.innerHeight /1.3;
     item.forEach(( element) =>{
let itemtop = element.getBoundingClientRect().top;

if(itemtop < wheight){
    element.classList.add('Appear')
}
    })
}

let menu = document.querySelector('.menu');
menu.addEventListener('click',toggleNav,true)
let nav = document.querySelector('.navparent')



function toggleNav(){
    if(nav.getAttribute('data-visible') == 'false'){
       nav.setAttribute('data-visible','true');
    }
    else{
        nav.setAttribute('data-visible','false');
    }
}

window.addEventListener('scroll',scrollAppear,true)