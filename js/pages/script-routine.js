`use strict`;

import { starAudio, lullabyAudio, timeslots, activitySlots, completionSlots, weekdayMarkup, openRecognitionModal, modalButtonRecognition, modalWindowRecognition, modalContentRecognition, modalNightscreen, modalButtonRoutine, modalWindowRoutine } from "../selectors.js";
import { closeModal } from "../components/closeModal.js";
import { headerView } from "../components/header.js";
import { navView } from "../components/nav.js";
import { footerView } from "../components/footer.js";

//MODAL WINDOW OPEN - RECOGNITION
const openStarModal = function() {
  openRecognitionModal.addEventListener(`click`, () => {
    modalWindowRecognition.classList.remove(`hidden`);

    let i = 1;
    completionSlots.forEach((completionSlot) => {
      if(completionSlot.textContent === `*`) {
        i++;
      };
      const markup = `
          <div class="modal-window__heading">
              🌟 well done! 🌟
          </div>
          <div class="modal-window__stars-message--primary">
              you've unlocked ${i} stars today! that's a constellation!
          </div>
          <div class="modal-window__stars-message--secondary">
              you've done so well - let's see how many stars you can get tomorrow
          </div>
          <div class="modal-window__stars-message--secondary">
              sleep well, little one
          </div>
      `;
      modalContentRecognition.innerHTML = markup;
      lullabyAudio.play();
    });

    modalButtonRecognition.addEventListener(`click`, function () {
      modalWindowRecognition.classList.add(`hidden`);
      modalNightscreen.classList.remove(`hidden`);
    });
  });
};

//TIME INDICATOR
const indicateHour = function() {

  const hours = new Date().getHours();
  const hourMarkup = `${hours}:00`;
  console.log(hours, hourMarkup);

  timeslots.forEach(function(timeslot) {
  if(timeslot.textContent === hourMarkup) {
    timeslot.classList.add(`highlight`);
    }
  });

};

//COMPLETION INDICATOR
const indicateCompleted = function() {

  completionSlots.forEach(function(completionSlot) {
    completionSlot.addEventListener("click", () => {
      completionSlot.innerHTML = `*`;
      completionSlot.style.color = `transparent`;
      completionSlot.classList.toggle(`completed`);
      starAudio.play();
    });
  });

};

//DRAG AND DROP
function dragStart(event) {
  event.currentTarget.classList.add("dragging");
}

const dragEnd = (event) => {
  event.currentTarget.classList.remove("dragging");
};

document.querySelectorAll(".drag-col").forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

const drag = (event) => {
  event.dataTransfer.setData("text/html", event.currentTarget.outerHTML);
  event.dataTransfer.setData("text/plain", event.currentTarget.dataset.id);
};

const dragEnter = (event) => {
  event.currentTarget.classList.add("drop");
};

const dragLeave = (event) => {
  event.currentTarget.classList.remove("drop");
};

document.querySelectorAll(".drag-col").forEach((column) => {
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
});

const drop = (event) => {
  document
    .querySelectorAll(".drag-col")
    .forEach((column) => column.classList.remove("drop"));
  document
    .querySelector(`[data-id="${event.dataTransfer.getData("text/plain")}"]`)
    .remove();

  event.currentTarget.innerHTML =
    event.currentTarget.innerHTML + event.dataTransfer.getData("text/html");
};

const allowDrop = (event) => {
  event.preventDefault();
};

//SET WEEKDAY
const setWeekday = () => {
  const today = new Date();
  const weekdays = [
    `monday`,
    `tuesday`,
    `wednesday`,
    `thursday`,
    `friday`,
    `saturday`,
    `sunday`,
  ];
  const weekday = weekdays[today.getDay() > 1 ? today.getDay() - 1 : 0];
  weekdayMarkup.innerHTML = `today is ${weekday}`;
};

//FUNCTION CALLS
closeModal(modalButtonRoutine, modalWindowRoutine);

openStarModal();

indicateCompleted();

indicateHour();

setWeekday();

headerView();

navView();

footerView();
