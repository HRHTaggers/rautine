`use strict`;

//DOM REFERENCES
const activityFormNow = document.querySelector(`.routine-input__form`);
const dropdownContainerActivityNow = document.querySelector(`.routine-input__form--dropdown-container-activity-now`);
const dropdownContainerActivityThen = document.querySelector(`.routine-input__form--dropdown-container-activity-then`);
const dropdownContainerActivityNext = document.querySelector(`.routine-input__form--dropdown-container-activity-next`);
const dropdownContainerTimingNow = document.querySelector(`.routine-input__form--timing-now`);
const dropdownContainerTimingNext = document.querySelector(`.routine-input__form--timing-next`);
const dropdownContainerTimingThen = document.querySelector(`.routine-input__form--timing-then`);
const dropdownContainersAll = document.querySelectorAll(`.routine-input__form--dropdown-container`);
const timelineDropdownActivity = document.querySelector(`.timeline__dropdown-activity`);
const headerDate = document.querySelector(`.header__date`);

//Modal Window
const modalWindowIndex = document.getElementById(`modal-window-index`);
const modalButtonIndex = document.getElementById(`modal-window-btn-index`);

//Transition Panel
const activityIconNow = document.querySelector(`.display-panel__icon--now`);
const activityDescNow = document.querySelector(`.display-panel__description--now`);
const timeRemainingNow = document.querySelector(`.display-panel__time--now`);
const timingNow = document.querySelector(`.routine-input__form--timing-now`);

const activityIconNext = document.querySelector(`.display-panel__icon--next`);
const activityDescNext = document.querySelector(`.display-panel__description--next`);
const timeRemainingNext = document.querySelector(`.display-panel__time--next`);
const timingNext = document.querySelector(`.routine-input__form--timing-next`);

const activityIconThen = document.querySelector(`.display-panel__icon--then`);
const activityDescThen = document.querySelector(`.display-panel__description--then`);
const timeRemainingThen = document.querySelector(`.display-panel__time--then`);
const timingThen = document.querySelector(`.routine-input__form--timing-then`);

//Timeline
const timelineContainer = document.querySelector(`.timeline-container__test`);
const progressContainer = document.querySelector(`.timeline__progress`);

//Buttons
const submitBtn = document.querySelector(`.routine-input__form--btn`);

//Forms
const formInput = document.querySelector(`.routine-input__form`);

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

const fiveMinuteWarningAudio = new Audio(`src/5-min-warning.wav`);
const timeUpWarningAudio = new Audio(`src/time-up-warning-mp3.mp3`);
timeUpWarningAudio.loop = false;

//MODAL WINDOW REVEAL - INDEX
const closeIndexModal = function() {
  modalButtonIndex.addEventListener(`click`, function () {
      modalWindowIndex.classList.add(`hidden`);
    });
};

closeIndexModal();

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
            `sunday`
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
            "december"
        ];
        const month = months[today.getMonth() - 1];
        const year = today.getFullYear();
        
        //Insert date & time to DOM
        headerDate.innerHTML = `${weekday}, ${date} ${month} ${year}, ${hours < 12 ? `0` : ``}${hours}:${minutes < 10 ? `0` : ``}${minutes}`;

        } setDate();
    }, 1000
);

//DYNAMIC DROPDOWN - ACTIVITIES
const createDropdown = function (array, i = 0, parentEl) {
  for (i = 0; i < array.length; i++) {
    let option = document.createElement(`option`);
    option.value = array[i].name;
    option.textContent = array[i].name;
    option.classList.add(`option-${array[i].name}`);
    parentEl.appendChild(option);
  }
};

//SET ACTIVITY & TIMING IN PANEL FROM DROPDOWNS
const selectActivity = function(event) {
  event.preventDefault();

  //Update activity from dropdown selection in DOM - deacription & icon
  const selectedActivityNow = dropdownContainerActivityNow.value;
  activityDescNow.innerHTML = selectedActivityNow;
  activityIconNow.innerHTML = activityData[dropdownContainerActivityNow.selectedIndex].icon;

  const selectedActivityNext = dropdownContainerActivityNext.value;
  activityDescNext.innerHTML = selectedActivityNext;
  activityIconNext.innerHTML =
    activityData[dropdownContainerActivityNext.selectedIndex].icon;

  const selectedActivityThen = dropdownContainerActivityThen.value;
  activityDescThen.innerHTML = selectedActivityThen;
  activityIconThen.innerHTML =
    activityData[dropdownContainerActivityThen.selectedIndex].icon;

  //Update remaining time for activity
  //Set finish time from dropdown selection
  setInterval(() => {
    function setFinishTime() {
      const finishTime = dropdownContainerTimingNow.value;
      const finishHour = finishTime.slice(0, 2) * 60;
      const finishMinute = finishTime.slice(3, 5);
      const totalMinutesEnd = +finishHour + +finishMinute;

      //Set current time
      const today = new Date();
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const totalMinutesNow = +hours * 60 + +minutes;

      //Calculate remaining time & update DOM - Now, Next, Then
      const timeRemaining = totalMinutesEnd - totalMinutesNow;
      timeRemainingNow.innerHTML = `time left: ${timeRemaining} minutes`;
      if(timeRemaining === 5) {
        fiveMinuteWarningAudio.play();
      };
      if(timeRemaining === 0.00) {
        timeUpWarningAudio.loop = false;
        timeUpWarningAudio.play();
      };

      const startTimeNext = dropdownContainerTimingNext.value;
      timeRemainingNext.innerHTML = `starts at: ${startTimeNext}`;

      const startTimeThen = dropdownContainerTimingThen.value;
      timeRemainingThen.innerHTML = `starts at: ${startTimeThen}`;
    }
    setFinishTime();
  }, 1000);
};

//SET START TIME FOR NEXT ACTIVITY BASED ON NOW INPUT
const setStartTimeNext = (timingNow) => {
  timingNext.value = timingNow.value;
};

//SET START TIME FOR THEN ACTIVITY BASED ON NEXT INPUT
const setStartTimeThen = (timingNext) => {
  timingThen.value = timingNext.value;
};

//EVENT LISTENERS
submitBtn.addEventListener(`click`, selectActivity);

/*
//TIMELINE HTML
//GENERATE TIMELINE HOURS
const generateTimeline = (i = 6, parentEl) => {
    let hour = 6;
    for (i = 6; i < 21; i++) {
        hour++;
        const time = document.createElement(`div`);
        time.textContent = `${hour}:00`;
        time.setAttribute(`class`, `${hour}00 timeline-hour col`);
        time.setAttribute(`id`, `${hour}`);
        parentEl.append(time);

    };
};

//GENERATE TIMELINE PROGRESS COLOR CODE
const generateProgressLine = (i = 6, parentEl) => {
  let hours = new Date().getHours();
  let currentHour = 6;
  for (i = 6; i < 24; i++) {
    currentHour++;
    const progress = document.createElement(`div`);
    progress.textContent = currentHour;
    progress.style.color = `transparent`;
    progress.setAttribute(`class`, `${currentHour}00 progress-hour col`);
    progress.setAttribute(`id`, `${currentHour}-progress`);
    if (currentHour < hours)
      progress.style.backgroundColor = `#5fdc63`;
    if (currentHour > hours)
        progress.style.backgroundColor = `#a9dfef`;
    if (currentHour === hours) progress.style.backgroundColor = `#febc76`;
    parentEl.append(progress);
  }
};
*/

//INITIALIZATION FUNCTION
function init() {
  createDropdown(activityData, 0, dropdownContainerActivityNow);
  createDropdown(activityData, 0, dropdownContainerActivityNext);
  createDropdown(activityData, 0, dropdownContainerActivityThen);
};

init();