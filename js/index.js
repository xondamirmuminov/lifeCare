var show = false;
var navList =   document.querySelector('.header__list');
var barsInner = document.querySelector('.inner-bars');
var nav = document.querySelector('.header__inner');

function bars(){
  if(show == true){
    navList.classList.remove("header__list--active");
    barsInner.classList.remove("inner-bars--active");
    nav.classList.remove("header__inner--active");
    show = false;
  }else{
    navList.classList.add("header__list--active");
    barsInner.classList.add("inner-bars--active");
    nav.classList.add("header__inner--active");
    show = true;
  }
};