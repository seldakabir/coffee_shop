import App from './product.js';
import './shoppingListModal.js';
import "./menuBAr.js";
// Selectors
const main = document.querySelector('.main');

App.renderAllProducts();

main.addEventListener('click', function (e) {
  const isclickedOnBtns = e.target.closest('.product-buttons');
  const product = e.target.closest('.product');

  // Check if user click on product and product is available
  if (
    !product ||
    product.classList.contains('product--not-available') ||
    isclickedOnBtns
  )
    return;

  App.openModal(product);
});
