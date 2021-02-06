//Select the mobileNav
let hamburger = document.querySelector('#hamburger');

let times = document.querySelector('#times');

let mobileNav = document.querySelector(".mobile-menu");

let contactUsMobileNav = document.querySelector(".contactUs-mobile");


hamburger.addEventListener('click',function() {
    mobileNav.classList.add('open');
});

times.addEventListener('click',function () {
    mobileNav.classList.remove('open'); 
});

contactUsMobileNav.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});






    

