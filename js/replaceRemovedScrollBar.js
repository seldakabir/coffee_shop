const body = document.body;

const getScrollbarWidth = function () {
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
};
const scrollWidth = getScrollbarWidth();

const addScrollPadding = function () {
  body.style.paddingRight = `${
    Number.parseFloat(getComputedStyle(body).paddingRight) + scrollWidth
  }px`;
};

const removeScrollPadding = function () {
  body.style.paddingRight = `${
    Number.parseFloat(getComputedStyle(body).paddingRight) - scrollWidth
  }px`;
};

export default {
  addScrollPadding,
  removeScrollPadding,
};
