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
//Header
const headerDateRoutine = document.querySelector(`.header__date--routine`);
const headerDateFlash = document.querySelector(`.header__date--flashcard`);

//Daily Routine HTML - Timeslots
const timeslots = document.querySelectorAll(`.timeslot`);
const activitySlots = document.querySelectorAll(`.activitySlot`);
const completionSlots = document.querySelectorAll(`.completionSlot`);
const weekdayMarkup = document.getElementById(`weekday-markup`);

const modalWindowRoutine = document.getElementById(`modal-window-routine`);
const modalButtonRoutine = document.getElementById(`modal-window-btn-routine`);

//Daily Routine HTML - Recognition
const modalWindowRecognition = document.getElementById(`modal-window-stars`);
const modalContentRecognition = document.getElementById(`modal-window-stars-content`);
const modalButtonRecognition = document.getElementById(
  `modal-window-btn-stars`
);
const openRecognitionModal = document.getElementById(`open-stars-modal`);
const modalNightscreen = document.getElementById(`modal-nightscreen`);


//Flashcard HTML
const flashcardDropdown = document.getElementById(`flashcard-dropdown`);
const displayPanel = document.getElementById(`display-panel-body`);
const displayFlashcardBtn = document.getElementById(`display-flashcard-btn`);

//Footer
const footer = document.getElementById(`footer`);

//Sounds
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

//FOOTER GENERATION
const footerGenerator = function() {
  const markup = `
    <div class="row">
            <div class="col-sm-8">
                <div class="footer__app-info">
                    <img src="/src/img/rAutine-logo-white.png" alt="rAutine logo" class="footer__logo">
                    <p class="footer__app-description">
                        an application to provide a visual routine for children who struggle with transitions in their daily routine
                    </p>
                </div>
            </div>
            <div class="col-sm-4 footer__attribution">
                <div class="footer__attribution--design">
                    designed by helen tagliarini for the purposes of educational support | please do not copy or use for the purposes of commerce.
                </div>
                <br />
                <div class="footer__attribution--logo">
                    <a href="https://htcoding.netlify.app" target="blank" rel="noopener noreferrer">
                        <img src="/src/img/helen-tagliarini-logo-back-light.png" alt="HT Coding logo" class="brand-logo">
                    </a>
                </div>
                <div class="footer__attribution--location">
                    london, united kingdom
                </div>
                <br />
                <div class="footer__attribution--music">
                    music provided by
                    child dreams by keys of moon | https://soundcloud.com/keysofmoon
                    music promoted by https://www.chosic.com/free-music/all/
                    creative commons cc by 4.0
                    https://creativecommons.org/licenses/by/4.0/
                </div>
            </div>
        </div>
  `;
  footer.innerHTML = markup;
};

footerGenerator();

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
