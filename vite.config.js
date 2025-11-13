import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/public',
  build: {
    outDir: '../../dist',
    rollupOptions: {
      input: {
        main: './src/public/index.html',
        product_listing: './src/public/product_listing/index.html',
        cart: './src/public/cart/index.html',
        checkout: './src/public/cart/checkout.html'
      }
    }
  }
});

