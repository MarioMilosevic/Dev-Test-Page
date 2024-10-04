import './sass/main.scss'
'use strict'

const navigation = document.querySelector(".header__list-hamburger");
const mobileNavigation = document.querySelector(".header__mobileList");
const xButton = document.querySelector(".header__mobileList-button");


const openNavigation = () => {
    mobileNavigation.style.transform = "translateX(0%)";
    navigation.style.display = 'none'
}

const closeNavigation = () => {
     mobileNavigation.style.transform = "translateX(100%)";
     navigation.style.display = "block";
}
navigation.addEventListener('click', openNavigation)
xButton.addEventListener('click', closeNavigation)

