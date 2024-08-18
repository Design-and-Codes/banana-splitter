let banana = document.querySelector("#banana");

let flipBananaButton        = document.getElementById("btn-flip-banana");
let moveBananaButton        = document.getElementById("btn-move-banana");
let disappearBananaButton   = document.getElementById("btn-disappear-banana");
let showBananaButton        = document.getElementById("btn-show-banana");
let multiplyBananaButton    = document.getElementById("btn-multiply-banana");
let changeBananaColorButton = document.getElementById("btn-change-banana-color");
let resetBananaColorButton  = document.getElementById("btn-reset-banana-color");


flipBananaButton.addEventListener("click", () => {
    banana.classList.toggle("flip");
});


disappearBananaButton.addEventListener("click", () => {
    banana.style.display = "none";
});

showBananaButton.addEventListener("click", () => {
    banana.style.display = "block";
});

// This is just pseudo-code; you can delete/modify this part and come back later again 
function changeBananaColor() {
    changeBananaColorButton.addEventListener("click", () => {
        document.body.style.backgroundColor = "red";
    });
}

function showResetBananaColorButton() {
    if (changeBananaColor) {
        // id == display: grid;
        resetBananaColorButton.style.display = "grid";
    }
    document.body.style.backgroundColor = "#ffed30";        
}

changeBananaColor();
showResetBananaColorButton();