export const closeModal = function (btn, el) {
  btn.addEventListener(`click`, () => {
    el.classList.add(`hidden`);
  });
};
