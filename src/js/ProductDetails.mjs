// ProductDetails.mjs
import { setLocalStorage } from './utils.mjs';

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.dataSource = dataSource;
        this.product = {};
    }

    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails();

        const addButton = document.getElementById('addToCart');
        if (addButton) {
            addButton.addEventListener('click', this.addProductToCart.bind(this));
        }
    }

    renderProductDetails() {
        if (!this.product) return;

        document.getElementById('productName').textContent = this.product.name;
        document.getElementById('productPrice').textContent = `$${this.product.price}`;
        document.getElementById('productDescription').textContent = this.product.description;

        const img = document.getElementById('productImage');
        if (img) {
            img.src = this.product.image;
            img.alt = this.product.name;
        }
    }

    addProductToCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(this.product);
        setLocalStorage('cart', cart);
        alert(`${this.product.name} added to cart!`);
    }
}
