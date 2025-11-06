// ProductList.mjs
import { renderListWithTemplate } from './utils.mjs';

// Template function for a single product card
function productCardTemplate(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span class="price">$${product.price.toFixed(2)}</span>
      <a href="product_pages/index.html?id=${product.id}" class="btn">View Details</a>
    </div>
  `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource; // e.g., 'tents'
    this.listElement = listElement;
    this.products = [];
  }

  async init() {
    // Load data from the JSON file
    try {
      const response = await fetch(`/json/${this.dataSource}.json`);
      const data = await response.json();
      this.products = data;
      this.renderList(this.products);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list, 'afterbegin', true);
  }
}
