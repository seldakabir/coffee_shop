import scrollFix from './replaceRemovedScrollBar.js';
import shoppingList from "./product.js"
import app from './product.js'

// Selectors
const btnOpenModal = document.querySelector('.open-shopping-list');
const modal = document.querySelector('.shopping-list-modal');
const overlay = document.querySelector('.shopping-list__overlay');
const plusBtn=document.querySelector('.pluse-btn');
const minesBtn=document.querySelector('.mines-btn');
const orderCount=document.querySelector('.order-count');
let count=0
const shoppingBox=document.querySelector('.shopping-box')
const productList=document.querySelector('.product-list')
let basketList=Array.from(app.shoppingList)
const totalProductPrice=document.querySelector('.total-price')
// Functions
const closeModal = function () {
  document.body.classList.remove('disable-scroll');

  overlay.classList.add('shopping-list__overlay--hidden');

  modal.classList.add('shopping-list-modal--hidden');

  scrollFix.removeScrollPadding();
};

const openModal = function () {
  document.body.classList.add('disable-scroll');

  overlay.classList.remove('shopping-list__overlay--hidden');

  modal.classList.remove('shopping-list-modal--hidden');

  scrollFix.addScrollPadding();
};

const toggleModalBtn = function (btnContainer) {
  [...btnContainer.children].forEach(svg =>
    svg.classList.toggle('open-shopping-list__icon--hidden')
  );
};

// Events

btnOpenModal.addEventListener('click', function () {

 

  const isModalClose = modal.classList.contains('shopping-list-modal--hidden');

  if (isModalClose) openModal();

  if (!isModalClose) closeModal();

  toggleModalBtn(this);
  generateProductOrder(basketList)
});


//show order products

function generateProductOrder(basketList){
  let totalPrice=0
  productList.innerHTML=''
 if(app.shoppingList!==null){
  
  app.shoppingList.forEach((product,index)=>{
  // console.log(product);
totalPrice+=Number(product.count)*Number(product.product.price)
console.log(product.count);
console.log(product.product.price);

  let shop=`
   <div class="products-in-shopping-list">

  <div class="left-product">
    <div class="btn-box">
      <button type="button" class="mines-btn">-</button>
      <span class="order-count">${product.count}</span>
      <button type="button" class="pluse-btn">+</button>
    </div>

  </div>
  <div class="right-product">
    <div class="detail-product">

      <div class="about-product">
        <div class="name-product">
          <p>${product.product.title}</p>
        </div>
        <div class="price-product">
        
          <span>${product.product.price} dollars</span>
        </div>
      </div>
      <div class="photo-of-product2">
        <img class="photo-of-product"
          src=${product.product.image}
          alt="coffee">
      </div>
    </div>
  </div>

`
// let lastChildShop=shoppingBox.lastElementChild
// if (lastChildShop) {
//   lastChildShop.insertAdjacentHTML('beforebegin', shop);
// } else {
//   shoppingBox.insertAdjacentHTML('afterbegin', shop);
// }
productList.insertAdjacentHTML('afterbegin',shop)
totalProductPrice.innerHTML=totalPrice
const productElement = productList.querySelectorAll('.products-in-shopping-list')[index];


      const plusBtn = productElement.querySelector('.pluse-btn');
      const orderCount = productElement.querySelector('.order-count');
      const minesBtn = productElement.querySelector('.mines-btn');
      plusBtn.addEventListener('click', () => {
       app.increaseProduct(product.id)
      
        orderCount.textContent = product.count;
        totalPrice=0
        totalPrice+=Number(orderCount.textContent)*Number(product.product.price)
        totalProductPrice.innerHTML=totalPrice
      });
      minesBtn.addEventListener('click', () => {
        if(product.count>0){
         app.decreaseProduct(product.id)
          orderCount.textContent = product.count;
          totalPrice=0
          totalPrice+=Number(orderCount.textContent)*Number(product.product.price)
          totalProductPrice.innerHTML=totalPrice
        }
      else if(product.count<=1){
        const productIndex = findIndexInShoppingList(product.id);
        // shoppingList.splice(productIndex, 1);
        
        generateProductOrder()
        saveListToLocalStorage()
      }
      
      })
      
      });
    }else{

    }

// }
}

