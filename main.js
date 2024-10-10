import "./sass/main.scss";
("use strict");

const header = document.querySelector("header");
const navigation = document.querySelector(".header__list-hamburger");
const mobileNavigation = document.querySelector(".header__mobileList");
const xButton = document.querySelector(".header__mobileList-button");

const openNavigation = () => {
  mobileNavigation.style.visibility = "visible";
  mobileNavigation.style.transform = "translateX(0%)";
  navigation.style.display = "none";
};

const closeNavigation = () => {
  mobileNavigation.style.visibility = "hidden";
  mobileNavigation.style.transform = "translateX(100%)";
  navigation.style.display = "block";
};
navigation.addEventListener("click", openNavigation);
xButton.addEventListener("click", closeNavigation);

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 1000) {
    header.classList.add("sticky");
    console.log("da");
  } else {
    header.classList.remove("sticky");
    console.log("ne");
  }
});

