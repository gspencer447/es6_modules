console.log("Hello World");

// TODO
import WishList from "./wishlist.js"

let form = document.querySelector("#submitForm");
let carMakeInput = document.querySelector("#makeInput");
let carModelInput = document.querySelector("#modelInput");
let carYearInput = document.querySelector("#yearInput");
let carMakeP = document.querySelector("#car-make");
let carModelP = document.querySelector("#car-model");
let carYearP = document.querySelector("#car-year");
let removeButton = document.querySelector(".btn");
let wishlistUnordered = document.querySelector("#wishListUl");

const wishList = new WishList();