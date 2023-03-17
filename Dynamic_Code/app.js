// Reset Button For .Dingo_cart
const reset1Button = document.querySelector("#reset1");
const reset2Button = document.querySelector("#reset2");

const dogCart = document.querySelector(".Dog_cart");
const underline1 = document.querySelector(".underline_1");

reset1Button.addEventListener("click", () => {
    dogCart.remove();
    underline1.remove();
});

// Reset Button For .Nutro_cart
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

// Increment/Decrement amount of items for .Dingo_cart
const amountInput1 = document.getElementById("amount-input_1");
const price1 = 12.99; // the price of item 1
const subTotalPrice1 = document.querySelector("#sub-total_1");

amountInput1.addEventListener("input", function () {
    const amount1 = parseInt(amountInput1.value);
    const newSubTotalPrice1 = amount1 * price1;
    subTotalPrice1.textContent = newSubTotalPrice1.toFixed(2);
    });

// Increment/Decrement amount of items for .Nutro_cart
const amountInput2 = document.getElementById("amount-input_2");
const price2 = 9.99; // the price of item 2
const subTotalPrice2 = document.querySelector("#sub-total_2");

amountInput2.addEventListener("input", function () {
    const amount2 = parseInt(amountInput2.value);
    const newSubTotalPrice2 = amount2 * price2;
    subTotalPrice2.textContent = newSubTotalPrice2.toFixed(2);
    });






// Shows The Total Amount Of Items Ordered In Modal
const checkoutButton = document.getElementById("checkout-btn");
checkoutButton.addEventListener("click", function () {
    const subTotal =
    parseFloat(subTotalPrice1.textContent) +
    parseFloat(subTotalPrice2.textContent);
  const tax = subTotal * 0.05;
    const shippingCost = 15;
    const grandTotal = subTotal + tax + shippingCost;

    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content");
    modalContent.innerHTML =
    "<span class='close'>&times;</span><p><em><b>Your checkout information here :</b></em><br><b>Congratulations!!!</b><br>Your finally submitting your request to us.<br>Have a nice time ahead.</p><img src='../images/ballon.jpg' alt='congratulation image'><p>Subtotal: $" +
    subTotal.toFixed(2) +
    "</p><p>Tax: $" +
    tax.toFixed(2) +
    "</p><p>Shipping: $" +
    shippingCost.toFixed(2) +
    "</p><p>Grand Total: $" +
    grandTotal.toFixed(2) +
    "</p>";

    modal.style.display = "block";

    const closeButton = modal.querySelector(".close");
    closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    });
});





//  subtotal, shipping, and grand total prices in the HTML based on the form inputs in the .Dog_cart and .Nutro_cart elements

const totalPrice = document.getElementsById("Total_price");
totalPrice.addEventListener("click", function () {
    const subTotal =
    parseFloat(subTotalPrice1.textContent) +
    parseFloat(subTotalPrice2.textContent);
    const tax = subTotal * 0.05;
    const shippingCost = 15;
    const grandTotal = subTotal + tax + shippingCost;

    totalPrice.style.display = "block";

    closeButton.addEventListener("click", function () {
    totalPrice.style.display = "none";
    });
});



// Next last things In My Code
