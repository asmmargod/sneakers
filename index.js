"use strict";

const body = document.querySelector(".top-row");
const mobileMenu = document.querySelector(".mobile-menu-items");
const closeMenu = document.querySelector(".cross-icon");
const openMenu = document.querySelector(".hamburger");
const cartPicture = document.querySelector(".cart-image");
const showCart = document.querySelector(".cart-display");
const closeCart = document.querySelector(".close-cart-icon");
const productName = document.querySelector(".item-name");
const itemPrice = document.querySelector(".price-tag");
const numberOfItems = document.getElementById("input");
const popUpArrowLeft = document.querySelector(".pop-arr-left");
const popUpArrowRight = document.querySelector(".pop-arr-right");
const inputField = document.getElementById("input");
const minus = document.querySelector(".minus");

// mobile menu show and hide
closeMenu.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
});

openMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
});

//cart show
cartPicture.addEventListener("click", function () {
  document.querySelector(".cart-display").classList.remove("hidden");
});

//cart hide

body.addEventListener("click", function () {
  console.log("click");
  showCart.classList.add("hidden");
});

closeCart.addEventListener("click", function () {
  showCart.classList.add("hidden");
});

// fill in cart info from the page
// name of product
document.getElementById("name-of-product").innerHTML = productName.innerHTML;
// price of product
document.getElementById("totals").innerHTML = itemPrice.innerHTML;
// number of items
document.getElementById("number-of-items").innerHTML = numberOfItems.innerHTML + input.value;
//total to pay

//counter functionality to add or remove item number
function decrement() {
  input.stepDown();
}
function increment() {
  input.stepUp();
}

//arrows for pop up gallery
popUpArrowLeft.addEventListener("click", function () {
  console.log("click");
});

popUpArrowRight.addEventListener("click", function () {
  console.log("click");
});
