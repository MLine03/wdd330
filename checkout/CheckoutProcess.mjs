export default class CheckoutProcess {
  constructor() {
    this.cartItems = [
      { id: "20CXG", name: "Backpack", price: 39.99, quantity: 1 },
      { id: "14GVF", name: "Sleeping Bag", price: 229.99, quantity: 1 }
    ];
    this.taxRate = 0.06;
  }

  displaySubtotal() {
    const subtotal = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * this.taxRate;
    const shipping = 10 + 2 * (this.cartItems.length - 1);
    const total = subtotal + tax + shipping;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('shipping').textContent = shipping.toFixed(2);
    document.getElementById('orderTotal').textContent = total.toFixed(2);
  }

  packageItems(items) {
    return items.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));
  }

  async checkout(form) {
    try {
      const formData = Object.fromEntries(new FormData(form).entries());
      const subtotal = parseFloat(document.getElementById('subtotal').textContent);
      const tax = parseFloat(document.getElementById('tax').textContent);
      const shipping = parseFloat(document.getElementById('shipping').textContent);
      const orderTotal = parseFloat(document.getElementById('orderTotal').textContent);

      const order = {
        orderDate: new Date().toISOString(),
        ...formData,
        items: this.packageItems(this.cartItems),
        orderTotal: orderTotal.toFixed(2),
        tax: tax.toFixed(2),
        shipping: shipping
      };

      const response = await fetch('http://wdd330-backend.onrender.com/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });

      const data = await response.json();

      if (!response.ok) {
        throw { name: 'servicesError', message: data };
      }

      alert('Order submitted successfully!');
      localStorage.clear(); // clear cart
      window.location.href = 'success.html'; // create a success page
    } catch (err) {
      console.error(err);
      alert('Error submitting order: ' + JSON.stringify(err.message));
    }
  }
}
