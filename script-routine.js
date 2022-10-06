`use strict`;

//DATA OBJECTS
const activityData = [
  {
    name: "breakfast",
    category: "eat",
    icon: `🥣`,
  },
  {
    name: "snack",
    category: "eat",
    icon: `🍎`,
  },
  {
    name: "lunch",
    category: "eat",
    icon: `🍽️`,
  },
  {
    name: "tea",
    category: "eat",
    icon: `🍽️`,
  },
  {
    name: "nap",
    category: "sleep",
    icon: `🛏️`,
  },
  {
    name: "bedtime",
    category: "sleep",
    icon: `🛏️`,
  },
  {
    name: "free-play",
    category: "play",
    icon: `🧸`,
  },
  {
    name: "playdate",
    category: "play",
    icon: `👭`,
  },
  {
    name: "music",
    category: "play",
    icon: `🎵`,
  },
  {
    name: "home",
    category: "location",
    icon: `🏡`,
  },
  {
    name: "nursery",
    category: "location",
    icon: `🏫`,
  },
  {
    name: "playgroup",
    category: "location",
    icon: `🏫`,
  },
  {
    name: "church",
    category: "location",
    icon: `⛪`,
  },
  {
    name: "outdoors",
    category: "play",
    icon: `🌳`,
  },
  {
    name: "grandma's",
    category: "location",
    icon: `👩🏻`,
  },
  {
    name: "shopping",
    category: "chore",
    icon: `🛒`,
  },
  {
    name: "car",
    category: "travel",
    icon: `🚗`,
  },
  {
    name: "bus",
    category: "travel",
    icon: `🚌`,
  },
];

//DOM REFERENCES
const headerDateRoutine = document.querySelector(`.header__date--routine`);
const headerDateFlash = document.querySelector(`.header__date--flashcard`);

const timeslots = document.querySelectorAll(`.timeslot`);
const activitySlots = document.querySelectorAll(`.activitySlot`);
const completionSlots = document.querySelectorAll(`.completionSlot`);
const weekdayMarkup = document.getElementById(`weekday-markup`);

const flashcardDropdown = document.getElementById(`flashcard-dropdown`);
const displayPanel = document.getElementById(`display-panel-body`);
const displayFlashcardBtn = document.getElementById(`display-flashcard-btn`);

const modalWindowRoutine = document.getElementById(`modal-window-routine`);
const modalButtonRoutine = document.getElementById(`modal-window-btn-routine`);
const modalWindowRecognition = document.getElementById(`modal-window-stars`);
const modalContentRecognition = document.getElementById(`modal-window-stars-content`);
const modalButtonRecognition = document.getElementById(
  `modal-window-btn-stars`
);
const openRecognitionModal = document.getElementById(`open-stars-modal`);
const modalNightscreen = document.getElementById(`modal-nightscreen`);

const starAudio = new Audio(`src/star-audio.wav`);
const lullabyAudio = new Audio (`src/lullaby.mp3`);

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

openStarModal();

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
      completionSlot.innerHTML = `*`;
      completionSlot.style.color = `transparent`;
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
    headerDateRoutine.innerHTML = `${weekday}, ${date} ${month} ${year}, ${
      hours < 12 ? `0` : ``
    }${hours}:${minutes < 10 ? `0` : ``}${minutes}`;

    weekdayMarkup.innerHTML = `today is ${weekday}`;
  }
  setDate();
}, 1000);

setDate();
