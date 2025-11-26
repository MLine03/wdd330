function renderFlavors() {
  const container = document.querySelector(".flavor-cards");
  if (!container) return;
  container.innerHTML = "";

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

document.addEventListener("DOMContentLoaded", renderFlavors);
