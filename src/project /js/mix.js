let selectedFlavors = [];

function updateSubtotal() {
  const subtotalEl = document.getElementById("subtotal");
  const addToCartBtn = document.getElementById("add-to-cart-btn");
  const total = selectedFlavors.reduce((sum, flavor) => sum + flavor.price, 0);
  subtotalEl.textContent = `Subtotal: $${total.toFixed(2)}`;
  addToCartBtn.disabled = selectedFlavors.length === 0;
}

function renderFlavorList() {
  const flavorListEl = document.getElementById("flavor-list");
  sodaFlavors.forEach(flavor => {
    const li = document.createElement("li");
    li.textContent = `${flavor.name} - $${flavor.price.toFixed(2)}`;
    li.draggable = true;

    li.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", flavor.id);
    });

    flavorListEl.appendChild(li);
  });
}

function setupDropZone() {
  const dropZone = document.getElementById("drop-zone");

  dropZone.addEventListener("dragover", e => {
    e.preventDefault();
    dropZone.style.backgroundColor = "#e0f7ff";
  });

  dropZone.addEventListener("dragleave", e => {
    dropZone.style.backgroundColor = "";
  });

  dropZone.addEventListener("drop", e => {
    e.preventDefault();
    dropZone.style.backgroundColor = "";
    const id = parseInt(e.dataTransfer.getData("text/plain"));
    const flavor = sodaFlavors.find(f => f.id === id);
    if (flavor && !selectedFlavors.includes(flavor)) {
      selectedFlavors.push(flavor);
      renderSelectedFlavors();
      updateSubtotal();
    }
  });
}

function renderSelectedFlavors() {
  const dropZone = document.getElementById("drop-zone");
  if (selectedFlavors.length === 0) {
    dropZone.textContent = "Drag flavors here";
  } else {
    dropZone.textContent = selectedFlavors.map(f => f.name).join(", ");
  }
}

function setupAddToCart() {
  const btn = document.getElementById("add-to-cart-btn");
  btn.addEventListener("click", () => {
    if (selectedFlavors.length === 0) return;

    const drink = {
      id: Date.now(),
      flavors: selectedFlavors.map(f => f.name),
      price: selectedFlavors.reduce((sum, f) => sum + f.price, 0),
      image: selectedFlavors[0].image // Just use first flavor image
    };

    addToCart(drink);
    alert("Added to cart!");
    selectedFlavors = [];
    renderSelectedFlavors();
    updateSubtotal();
    updateCartCount();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFlavorList();
  setupDropZone();
  renderSelectedFlavors();
  updateSubtotal();
  setupAddToCart();
});
