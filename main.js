'use strict'

const activeClass ="is-active";

const popups = ['story', 'withdrawal', 'paypal', 'impressum'];

const initPopup = (type) => {
  const open = document.querySelector(`.js-open-${type}`);
  const close = document.querySelector(`.js-${type}-close`);
  const popup = document.querySelector(`.js-${type}-popup`)
  open.addEventListener('click', () => {
    popup.classList.add(activeClass);
  });
  close.addEventListener('click', () => {
    popup.classList.remove(activeClass);
  });
}

popups.forEach(type => initPopup(type));
