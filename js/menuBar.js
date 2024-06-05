

// Selectors
const buttonHolder = document.getElementsByClassName('buttonholder');
const textHolder = document.getElementsByClassName('textholder');
const buttonsArray = Array.from(buttonHolder);
const textHolders = Array.from(textHolder);
const swipePosition = document.querySelector('.swipe-position');
const menuSections=Array.from(document.getElementsByClassName("section"))

let currentIndex=0;
let translateX = 0;




//add click event to each button of menu bar

 buttonsArray.forEach(button => {
  button.addEventListener('click', () => {

    const buttonIndex=parseInt(button.getAttribute('data-index'),10) 
  const buttonIndexSection = button.getAttribute('data-topic');

 const sectionIndex=document.getElementById(buttonIndexSection)


//menu swipe to left and right
   const matrix = new WebKitCSSMatrix(swipePosition.style.transform);
         const currentX = matrix.m41;
         if(buttonIndex===currentIndex){
  
          const newTranslateX = currentX - 225 ;
             swipePosition.style.transform = `translate3d(${newTranslateX}px, 0px, 0px)`;
          currentIndex=buttonIndex
          
        }

   if(buttonIndex>currentIndex){
  
  const newTranslateX = currentX - (225 * (buttonIndex - currentIndex));
     swipePosition.style.transform = `translate3d(${newTranslateX}px, 0px, 0px)`;
  currentIndex=buttonIndex
  
}
if(buttonIndex<currentIndex){
  const newTranslateX = currentX - (225 * (buttonIndex - currentIndex));
     swipePosition.style.transform = `translate3d(${newTranslateX}px, 0px, 0px)`;
  currentIndex=buttonIndex
  
}

//show textHolder of each button
if (buttonIndex >= 0 && buttonIndex < textHolders.length) {
  const textHolder = textHolders[buttonIndex];
 if (textHolder.style.display === 'flex') {
    textHolder.style.display = 'none';
  } else {
    textHolders.forEach(holder => {
      holder.style.display = 'none';
    });
    textHolder.style.display = 'flex';
  }
}

if (sectionIndex) {
  sectionIndex.scrollIntoView({ behavior: 'smooth' });
}
   
  });
});

//swiper of menu bar

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
});

let currentTranslateX = 0;

// Update Swiper's transform 
function updateSwiperTranslate(translateX) {
  swiper.wrapperEl.style.transform = `translate3d(${translateX}px, 0, 0)`;
}
updateSwiperTranslate(500);
