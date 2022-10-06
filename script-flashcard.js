`use strict`;

//DATA OBJECTS
const activityData = [
  {
    name: "---",
    icon: `❔`,
  },
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
const headerDateFlash = document.querySelector(`.header__date--flashcard`);

const flashcardDropdown = document.getElementById(`flashcard-dropdown`);
const flashcardDisplay = document.getElementById(`display-panel-body`);
const flashcardIcon = document.getElementById(`display-panel-icon`);
const flashcardTitle = document.getElementById(`display-panel-title`);
const displayFlashcardBtn = document.getElementById(`display-flashcard-btn`);
const clearFlashcardBtn = document.getElementById(`clear-flashcard-btn`);

//FLASHCARD DROPDOWN GENERATOR
const createDropdown = function (array, i = 0, parentEl) {
  for (i = 0; i < array.length; i++) {
    let option = document.createElement(`option`);
    option.value = array[i].name;
    option.textContent = array[i].name;
    option.classList.add(`option-${array[i].name}`);
    parentEl.appendChild(option);
  }
};

createDropdown(activityData, 0, flashcardDropdown);

//SET FLASHCARD VISUALS
const setVisual = function() {

    const selectedActivity = flashcardDropdown.value;
    const selectedActivityIcon = activityData[flashcardDropdown.selectedIndex].icon;
    flashcardDisplay.insertAdjacentHTML(
      `beforeend`,
      `
        <div class="col display-panel__flashcard display-panel__flashcard--${Math.trunc(Math.random()*5)+1}">
            <figure class="display-panel" id="display-panel-icon">
                ${selectedActivityIcon}
            </figure>
            <div class="display-panel__title" id="display-panel-title">
                ${selectedActivity}
            </div>
        </div>
        `
    );

};

//CLEAR FLASHCARD DISPLAY PANEL
const clearVisuals = function() {

    flashcardDisplay.innerHTML = ``;

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
    headerDateFlash.innerHTML = `${weekday}, ${date} ${month} ${year}, ${
      hours < 12 ? `0` : ``
    }${hours}:${minutes < 10 ? `0` : ``}${minutes}`;

  }
  setDate();
}, 1000);

setDate();