"use strict";

let cookieStoreArray = [
    {img:"best-seller-images/jam_poppy.png", title:"JAM & POPPY SEED BITES", price:"$1.00"},
    {img:"images/poppy_seeds.png", title: "POPPY SEEDS BITES", price:"$2.00"},
    {img:"best-seller-images/oatmeal_bites.png", title: "OATMEAL BITES", price:"$2.00"},
    {img:"images/soft_butter.png", title: "SOFT BUTTER COOKIES", price:"$2.00"},
    {img:"images/parm.png", title: "PARMESAN BITES", price:"$2.00"},
    {img:"best-seller-images/white_choc.png", title: "WHITE CHOCOLATE BITES", price:"$1.00"},
    {img:"images/jam_bites.png", title: "JAM BITES", price:"$1.00"},
    {img:"images/choc_chips.png", title: "CHOCOLATE CHIPS", price:"$2.00"},
    {img:"images/nuts_caramel.png", title: "NUTS & CARAMEL BITES", price:"$2.00"},
    {img:"images/butter.png", title: "BUTTER COOKIES", price:"$1.00"},
    {img:"images/pecan_nuts.jpg", title: "PECAN NUT BITES", price:"$2.00"},
    {img:"images/seeds.jpg", title: "SEEDS BITES", price:"$2.00"}  
];



let displayCookieStoreArray = (cookieStoreArray) => {
    for (var i = 0; i < cookieStoreArray.length; i++) {
        var cookieCard = `
        <div class="cookieCard d-flex justify-content-center align-items-center flex-column">
            <img class="best-seller-img" src="${cookieStoreArray[i].img}">
            <h3>${cookieStoreArray[i].title}</h3>
            <p>${cookieStoreArray[i].price}</p>
        </div>
        `; 
        document.querySelector('#store-display').innerHTML += cookieCard;
    }
};

displayCookieStoreArray(cookieStoreArray);


module.exports = {
    cookieStoreArray,
    displayCookieStoreArray
};