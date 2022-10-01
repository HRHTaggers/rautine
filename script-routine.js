/*const timeCheck = function () {
  const hours = new Date().getHours();
  const timeslot = document.querySelector(`.`)
  console.log(hours);
  if(hours === 22) 
};

timeCheck();
*/

//DOM REFERENCES
const headerDate2 = document.querySelector(`.header__date2`);
const timeslots = document.querySelectorAll(`.timeslot`);
const activitySlots = document.querySelectorAll(`.activitySlot`);
const completionSlots = document.querySelectorAll(`.completionSlot`);
const weekdayMarkup = document.getElementById(`weekday-markup`);

const modalWindowRoutine = document.getElementById(`modal-window-routine`);
const modalButtonRoutine = document.getElementById(`modal-window-btn-routine`);
const modalWindowRecognition = document.getElementById(`modal-window-stars`);
const modalContentRecognition = document.getElementById(`modal-window-stars-content`);
const modalButtonRecognition = document.getElementById(
  `modal-window-btn-stars`
);
const openRecognitionModal = document.getElementById(`open-stars-modal`);

const starAudio = new Audio(`src/star-audio.wav`);

//MODAL WINDOW CLOSE - ROUTINE
const closeRoutineModal = function() {
  modalButtonRoutine.addEventListener(`click`, () => {
    modalWindowRoutine.classList.add(`hidden`);
  });
};

closeRoutineModal();

//MODAL WINDOW OPEN - RECOGNITION
const openStarModal = function() {
  openRecognitionModal.addEventListener(`click`, () => {
    modalWindowRecognition.classList.remove(`hidden`);

    i = 1;
    completionSlots.forEach((completionSlot) => {
      if(completionSlot.textContent === ``) {
        i++;
      };
      const markup = `
          <div class="modal-window__heading">
              🌟 well done! 🌟
          </div>
          <div class="modal-window__stars-message--primary">
              you've unlocked ${i} stars today! that's enough for a galaxy!
          </div>
          <div class="modal-window__stars-message--secondary">
              you've done so well today - let's see how many you can get tomorrow
          </div>
          <div class="modal-window__stars-message--secondary">
              sleep well, little star
          </div>
      `;
      modalContentRecognition.innerHTML = markup;
    });

    modalButtonRecognition.addEventListener(`click`, function () {
      modalWindowRecognition.classList.add(`hidden`);
    });
  });
};

openStarModal();

//MODAL WINDOW CLOSE - RECOGNITION
modalButtonRecognition.addEventListener(`click`, function() {
    modalWindowRecognition.classList.add(`hidden`);
});

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

indicateHour();

//COMPLETION INDICATOR
const indicateCompleted = function() {

  completionSlots.forEach(function(completionSlot) {
    completionSlot.addEventListener("click", () => {
      completionSlot.innerHTML = ``;
      completionSlot.classList.toggle(`completed`);
      starAudio.play();
    });
  });

};

indicateCompleted();

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

//SET TIME
setInterval(() => {
  function setDate() {
    //Get date & time
    const today = new Date();

    //Convert date & time to string
    const hours = today.getHours();
    const minutes = today.getMinutes();
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
    const date = today.getDate();
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    const month = months[today.getMonth() - 1];
    const year = today.getFullYear();

    //Insert date & time to DOM
    headerDate2.innerHTML = `${weekday}, ${date} ${month} ${year}, ${
      hours < 12 ? `0` : ``
    }${hours}:${minutes < 10 ? `0` : ``}${minutes}`;

    weekdayMarkup.innerHTML = `today is ${weekday}`;
  }
  setDate();
}, 1000);

setDate();
