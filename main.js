const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger .menu");
const navbarTwo = document.querySelector(".navbar__two");
const navbarOne = document.querySelector(".navbar__one");
const logo = document.querySelector(".logo");
const heading_img = document.querySelector(".heading__img");
const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");

let source = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];

let currentItem = 0;
// window.addEventListener("DOMContentLoaded", () => {
//   const item = source[Math.floor(Math.random() * source.length)];
//   heading_img.src = item;
// });

btn2.addEventListener("click", () => {
  const item = source[currentItem];
  heading_img.src = item;
  currentItem++;
  if (currentItem > source.length - 1) {
    currentItem = 0;
  }
});

btn1.addEventListener("click", () => {
  const item = source[currentItem];
  heading_img.src = item;
  currentItem--;
  if (currentItem < 0) {
    currentItem = source.length - 1;
  }
});
let showMenu = false;

hamburger.addEventListener("click", () => {
  if (!showMenu) {
    navbar.classList.add("open");
    navbarTwo.classList.add("open");
    logo.classList.add("open");
    navbarOne.classList.add("open");
    menu.classList.add("open");

    showMenu = true;
  } else {
    navbar.classList.remove("open");
    navbarTwo.classList.remove("open");
    navbarOne.classList.remove("open");
    logo.classList.remove("open");
    menu.classList.remove("open");
    showMenu = false;
  }
});
const header = document.querySelector(".header ");
const shop = document.querySelector(".shop ");
const two = document.querySelector(".two ");
const three = document.querySelector(".three ");
const four = document.querySelector(".four ");
let currentPixel = window.pageYOffset;

//looper keeps running and keeps track of where the new pixel is
const looper = function () {
  const newPixel = window.pageYOffset;
  const diff = newPixel - currentPixel;
  const speed = diff * 0.35;

  header.style.transform = "skewY(" + speed + "deg)";
  shop.style.transform = "skewY(" + speed + "deg)";
  two.style.transform = "skewY(" + speed + "deg)";
  three.style.transform = "skewY(" + speed + "deg)";
  four.style.transform = "skewY(" + speed + "deg)";

  currentPixel = newPixel;

  requestAnimationFrame(looper);
};

looper();
