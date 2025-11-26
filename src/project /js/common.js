// Update cart count in header
function updateCartCount() {
  const cartCountEl = document.getElementById('cart-count');
  if (!cartCountEl) return;
  const cart = getCart();
  cartCountEl.textContent = cart.length;
}

// Initialize
document.addEventListener("DOMContentLoaded", updateCartCount);
