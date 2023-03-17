const reset1Button = document.querySelector("#reset1");
const reset2Button = document.querySelector("#reset2");

const dogCart = document.querySelector(".Dog_cart");
const underline1 = document.querySelector(".underline_1");

reset1Button.addEventListener("click", () => {
    dogCart.remove();
    underline1.remove();
});

const nutroCart = document.querySelector(".Nutro_cart");
const underline2 = document.querySelector(".underline_2");

reset2Button.addEventListener("click", () => {
    nutroCart.remove();
    underline2.remove();
});

const checkoutBtn = document.getElementById("checkout-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];

checkoutBtn.onclick = function () {
    modal.style.display = "block";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
};
