// Sample soda flavors data (will replace with API later)
const sodaFlavors = [
  {
    id: 1,
    name: "Cherry Blast",
    price: 2.5,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Blueberry Breeze",
    price: 2.75,
    image: "https://images.unsplash.com/photo-1505253210343-4d9ae8bbf5e3?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Golden Citrus",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80"
  }
];

// Function to render soda flavors on the page
function renderFlavors() {
  const container = document.querySelector(".flavor-cards");
  container.innerHTML = ""; // Clear previous

  sodaFlavors.forEach(flavor => {
    const card = document.createElement("div");
    card.classList.add("flavor-card");

    card.innerHTML = `
      <img src="${flavor.image}" alt="${flavor.name}" />
      <div class="flavor-name">${flavor.name}</div>
      <div class="flavor-price">$${flavor.price.toFixed(2)}</div>
    `;

    container.appendChild(card);
  });
}

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  renderFlavors();
});
