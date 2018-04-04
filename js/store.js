"use strict";

let cookieStoreArray = [
    "best-seller-images/jam_poppy.png",
    "images/poppy_seeds.png",
    "best-seller-images/oatmeal_bites.png",
    "images/soft_butter.png",
    "images/parm.png",
    "best-seller-images/white_choc.png",
    "images/jam_bites.png",
    "images/choc_chips.png",
    "images/nuts_caramel.png",
    "images/butter.png",
    "images/pecan_nuts.jpg",
    "images/seeds.jpg"
];

let displayStoreArray = () => {
    for (var i = 0; i < booksArray.length; i++) {
        var cookieCard = `
        <div class="cookieCard">
            <img class="best-seller-img" src="best-seller-images/white_choc.png">
            <h3>WHITE CHOCOLATE BITES</h3>
            <p>$1.00</p>
        </div>
        `
        document.querySelector('#store-display').innerHTML += cookieCard;
    }
};
}