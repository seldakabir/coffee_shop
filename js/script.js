import App from './product.js';

// Selectors
const main = document.querySelector('.main');
const buttonHolder=document.getElementsByClassName("buttonholder")
const textHolder=document.getElementsByClassName("textholder")
const buttonsArray = Array.from(buttonHolder);
const textHolders = Array.from(textHolder);

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



//add click event to each button of menu bar
buttonsArray.forEach(button => {
  button.addEventListener("click", () => {
      const index = parseInt(button.getAttribute('data-index'), 10);

     
      if (index >= 0 && index < textHolders.length) {
      
        const textHolder = textHolders[index];
        if (textHolder.style.display === "flex") {
          
            textHolder.style.display = "none";
        } else {
          
            textHolders.forEach(holder => {
                holder.style.display = "none";
            });
            textHolder.style.display = "flex";
        }
      }
  })
});

//swiper of menu bar
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
