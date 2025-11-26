// Sample soda flavors
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

// Cart stored in localStorage for persistence
const CART_KEY = "sodaBarCart";

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
}
