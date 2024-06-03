document.addEventListener("DOMContentLoaded", () => {
  const precio = 400000;

  const precioSpan = document.querySelector(".precio-inicial");
  const increaseButton = document.querySelector("#increase");
  const decreaseButton = document.querySelector("#decrease");
  const quantityDisplay = document.querySelector(".cantidad");
  const totalDisplay = document.querySelector(".valor-total");

  let quantity = 0;

  precioSpan.innerHTML = precio;

  function updateTotal() {
    const total = quantity * precio;
    totalDisplay.innerHTML = total.toFixed(0); // No mostrar decimales
  }

  increaseButton.addEventListener("click", () => {
    quantity++;
    quantityDisplay.innerHTML = quantity;
    updateTotal();
  });

  decreaseButton.addEventListener("click", () => {
    if (quantity > 0) {
      quantity--;
      quantityDisplay.innerHTML = quantity;
      updateTotal();
    }
  });
});