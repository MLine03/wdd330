function renderCart() {
  const cartItemsEl = document.getElementById("cart-items");
  const subtotalEl = document.getElementById("subtotal");
  const discountsEl = document.getElementById("discounts");
  const totalEl = document.getElementById("total");

  const cart = getCart();

  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
    subtotalEl.textContent = "0.00";
    discountsEl.textContent = "0.00";
    totalEl.textContent = "0.00";
    return;
  }

  cartItemsEl.innerHTML = "";

  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="Drink" />
      <div class="cart-item-details">
        <div><strong>Flavors:</strong> ${item.flavors.join(", ")}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
      </div>
      <div class="cart-item-remove" data-id="${item.id}">&times; Remove</div>
    `;

    cartItemsEl.appendChild(itemDiv);
  });

  // Simple promotion: if more than 2 items, 10% discount
  let discount = 0;
  if (cart.length >= 3) {
    discount = subtotal * 0.1;
  }

  const total = subtotal - discount;

  subtotalEl.textContent = subtotal.toFixed(2);
  discountsEl.textContent = discount.toFixed(2);
  totalEl.textContent = total.toFixed(2);

  // Remove handlers
  document.querySelectorAll(".cart-item-remove").forEach(button => {
    button.addEventListener("click", e => {
      const id = parseInt(e.target.getAttribute("data-id"));
      let newCart = getCart().filter(item => item.id !== id);
      saveCart(newCart);
      updateCartCount();
      renderCart();
    });
  });
}

function setupCheckout() {
  const btn = document.getElementById("checkout-btn");
  btn.addEventListener("click", () => {
    if (getCart().length === 0) {
      alert("Cart is empty!");
      return;
    }
    alert("Checkout is mocked. Order placed.");
    clearCart();
    updateCartCount();
    renderCart();
    window.location.href = "confirmation.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  setupCheckout();
});
