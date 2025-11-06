// ProductDetails.mjs
// ProductDetails.mjs
const products = [
  {
    name: "Marmot Ajax Tent 3-Person 3-Season",
    image: "../../images/marmot-ajax.webp",
    description: "Lightweight 3-person tent for 3-season camping.",
    price: "$299",
    alt: "Marmot Ajax 3-Person Tent in Pale Pumpkin"
  },
  {
    name: "Cedar Ridge Rimrock Tent 2-Person 3-Season",
    image: "../../images/cedar-ridge.webp",
    description: "Compact tent for 2-person, 3-season camping.",
    price: "$199",
    alt: "Cedar Ridge Rimrock 2-Person Tent in Rust"
  },
  {
    name: "The North Face Talus Tent 4-Person 3-Season",
    image: "../../images/north-face-talus.webp",
    description: "Spacious 4-person tent for 3-season adventures.",
    price: "$399",
    alt: "North Face Talus 4-Person Tent in Golden"
  },
  {
    name: "The North Face Alpine Guide Tent 3-Person 4-Season",
    image: "../../images/north-face-alpine.webp",
    description: "Durable 3-person tent for 4-season mountain conditions.",
    price: "$499",
    alt: "North Face Alpine Guide 3-Person 4-Season Tent"
  }
];

const container = document.getElementById("product-container");

products.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  productDiv.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.alt}" width="230" height="230">
    <p>${product.description}</p>
    <p class="price">${product.price}</p>
  `;

  container.appendChild(productDiv);
});
