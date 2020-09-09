const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

addEventListener('click',()=>{
hamburger.classList.toggle('active');
mobile_menu.classList.toggle('active');
});

addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position>180){
        header.style.backgroundColor = '#29323c';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
});