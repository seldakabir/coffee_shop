import App from './product.js';

// Selectors
const main = document.querySelector('.main');
const buttonHolder=document.getElementsByClassName("buttonholder")
const textHolder=document.getElementsByClassName("textholder")
const buttonsArray = Array.from(buttonHolder);
const textHolders = Array.from(textHolder);
const swipePosition=document.querySelector(".swipe-position")
let translateX = 0;

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
      
      
      buttonsArray.forEach((btn,index) => {
      
        
        const matrix = new WebKitCSSMatrix(swipePosition.style.transform);
        const currentX = matrix.m41; 
if(index===buttonsArray.length-1){
  const newTranslateX = currentX + 20;
  swipePosition.style.transform = `translate3d(${newTranslateX}px, 0px, 0px)`;
}
else{
   
    const newTranslateX = currentX - 20;
    swipePosition.style.transform = `translate3d(${newTranslateX}px, 0px, 0px)`;
}
    
       
      
    });
  })
});

//swiper of menu bar

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,




 

});
    
let currentTranslateX = 0;

// Update Swiper's transform directly
function updateSwiperTranslate(translateX) {
    swiper.wrapperEl.style.transform = `translate3d(${translateX}px, 0, 0)`;
}
updateSwiperTranslate(553)
  

