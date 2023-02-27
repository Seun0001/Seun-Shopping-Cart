const btn = document.querySelector(".checkout");

btn.addEventListener("click", (e) => {
  console.log(e.target);
  e.target.color = "red";
});

const remove = document.querySelectorAll(".remove-product");

console.log(remove);

remove.forEach((product) => {
  console.log(product);
  product.addEventListener("click", (e) => {
    console.log(e.currentTarget.parentElement);
  });
});
