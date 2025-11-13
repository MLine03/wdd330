import ProductData from './ProductData.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const id = getParam('id');
const dataSource = new ProductData();

async function showProductDetail() {
  const product = await dataSource.findProductById(id);
  document.querySelector('.product-detail').innerHTML = `
    <h1>${product.Name}</h1>
    <img src="${product.Images.PrimaryLarge}" alt="${product.Name}" />
    <p>${product.Description}</p>
    <p>Price: $${product.Price}</p>
  `;
}

showProductDetail();
