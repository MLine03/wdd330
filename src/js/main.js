import ProductList from './ProductList.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const productListElement = document.querySelector('#product-list');

  if (productListElement) {
    const tentsList = new ProductList('tents', 'tents', productListElement);
    tentsList.init();
  }
});
