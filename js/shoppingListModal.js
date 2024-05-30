import scrollFix from './replaceRemovedScrollBar.js';

// Selectors
const btnOpenModal = document.querySelector('.open-shopping-list');
const modal = document.querySelector('.shopping-list-modal');
const overlay = document.querySelector('.shopping-list__overlay');

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
});
