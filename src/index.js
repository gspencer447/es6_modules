// TODO
import WishList from "./wishlist"

let form = document.querySelector("#submitForm");
let carMakeInput = document.querySelector("#makeInput");
let carModelInput = document.querySelector("#modelInput");
let carYearInput = document.querySelector("#yearInput");
let carMakeP = document.querySelector("#car-make");
let carModelP = document.querySelector("#car-model");
let carYearP = document.querySelector("#car-year");
let removeButton = document.querySelector(".removeBtn");
let wishlistUnordered = document.querySelector("#wishListUl");
let wishList = new WishList();

function showCarDetails(car){
    console.log("Inside showCarDetails")
    carMakeP.textContent = car.make;
    carModelP.textContent = car.model;
    carYearP.textContent = car.year;
    removeButton.disabled = false;
    removeButton.setAttribute("data-carId", car.id);
}

function updateDOMList() {
    wishlistUnordered.innerHTML = '';
    wishList.list.forEach((car) => {
        const carLi = document.createElement('li');
        carLi.textContent = `${car.make}, ${car.model}`;
        carLi.addEventListener('click', () => {showCarDetails(car)});
        wishlistUnordered.appendChild(carLi);
    })
}

function addCar(event){
    event.preventDefault();
    const make = carMakeInput.value;
    const model = carModelInput.value;
    const year = carYearInput.value;
    wishList.add(make, model, year);
    updateDOMList();
}
form.addEventListener('submit', addCar);


function removeCar() {
    const carId = Number(removeButton.getAttribute("data-carId"));
    wishList.remove(carId);
    updateDOMList();
    carMakeP.textContent = "";
    carModelP.textContent = "";
    carYearP.textContent = "";
    removeButton.disabled = true;
}
removeButton.addEventListener('click', removeCar);