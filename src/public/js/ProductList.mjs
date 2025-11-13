export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const products = await this.dataSource.getData(this.category);
    this.renderList(products);
  }

  renderList(products) {
    this.listElement.innerHTML = '';
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <a href="../product_pages/index.html?id=${product.Id}">
          <img src="${product.Images.PrimaryMedium}" alt="${product.Name}" />
          <h3>${product.Name}</h3>
          <p>$${product.Price}</p>
        </a>
      `;
      this.listElement.appendChild(card);
    });
  }
}
