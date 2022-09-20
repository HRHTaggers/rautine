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

//Transition Panel
const activityIconNow = document.querySelector(`.transition-panel__icon--now`);
const activityDescNow = document.querySelector(`.transition-panel__description--now`);
const timeRemainingNow = document.querySelector(`.transition-panel__time--now`);
const timingNow = document.querySelector(`.routine-input__form--timing-now`);

const activityIconNext = document.querySelector(`.transition-panel__icon--next`);
const activityDescNext = document.querySelector(`.transition-panel__description--next`);
const timeRemainingNext = document.querySelector(`.transition-panel__time--next`);
const timingNext = document.querySelector(`.routine-input__form--timing-next`);

const activityIconThen = document.querySelector(`.transition-panel__icon--then`);
const activityDescThen = document.querySelector(`.transition-panel__description--then`);
const timeRemainingThen = document.querySelector(`.transition-panel__time--then`);
const timingThen = document.querySelector(`.routine-input__form--timing-then`);

//Buttons
const submitBtn = document.querySelector(`.routine-input__form--btn`);

//Forms
const formInput = document.querySelector(`.routine-input__form`);

//DATA OBJECTS
const activityData = [
  {
    name: "Snack",
    category: "Eat",
    icon: `<i class="fa-solid fa-apple-whole"></i>`,
  },
  {
    name: "Lunch",
    category: "Eat",
    icon: `<i class="fa-solid fa-utensils"></i>`,
  },
  {
    name: "Tea",
    category: "Eat",
    icon: `<i class="fa-solid fa-utensils"></i>`,
  },
  {
    name: "Nap",
    category: "Sleep",
    icon: `<i class="fa-solid fa-bed"></i>`,
  },
  {
    name: "Bedtime",
    category: "Sleep",
    icon: `<i class="fa-solid fa-bed"></i>`,
  },
  {
    name: "Music",
    category: "Play",
    icon: `<i class="fa-solid fa-music"></i>`,
  },
  {
    name: "Outdoor",
    category: "Play",
    icon: `<i class="fa-solid fa-tree"></i>`,
  },
  {
    name: "Phonics",
    category: "Learning",
    icon: `<i class="fa-brands fa-readme"></i>`,
  },
  {
    name: "Maths",
    category: "Learning",
    icon: `<i class="fa-solid fa-plus"></i>`,
  },
];

const transitionData = [
    {
        name: `now`,
        capital: `Now`
    },
    { 
        name: `next`,
        capital: `Next`
    }, 
    {
        name: `then`,
        capital: `Then`
    }
];

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


//GENERATE FORMS FOR EACH TRANSITION
/*const generateForm = function (array, i = 0, parentEl) {

    for (i = 0; i < array.length; i++) {
      let form = document.createElement(`form`);
      form.innerHTML = `
            <div class="col-sm-4">
                <label class="routine-input__form--label">${array[i].name}</label>
                <select name="dropdown" class="routine-input__form--dropdown-container routine-input__form--dropdown-container-activity-${array[i].name}">
                    <option>Snack</option>
                    <option>Lunch</option>
                    <option>Nap</option>
                    <option>Outdoor Play</option>
                    <option>Music</option>
                </select>
                <input type="time" class="routine-input__form--timing routine-input__form--timing-now" />
                <!--<button class="routine-input__form--btn-${array[i].name} btn">
                    Add to routine
                </button>-->
            </div>
        `;
        parentEl.appendChild(form);
    };

};
*/

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
      timeRemainingNow.innerHTML = `Time left: ${timeRemaining} minutes`;

      const startTimeNext = dropdownContainerTimingNext.value;
      timeRemainingNext.innerHTML = `Starts at: ${startTimeNext}`;

      const startTimeThen = dropdownContainerTimingThen.value;
      timeRemainingThen.innerHTML = `Starts at: ${startTimeThen}`;
    }
    setFinishTime();
  }, 1000);
};

//SET START TIME FOR NEXT ACTIVITY BASED ON PREVIOUS INPUT
const setStartTime = (timingNow) => {
  timingNext.value = timingNow.value;
};

//EVENT LISTENERS
//submitBtnNow.addEventListener(`click`, selectActivity);
//submitBtnNext.addEventListener(`click`, selectActivity);
//submitBtnThen.addEventListener(`click`, selectActivity);
submitBtn.addEventListener(`click`, selectActivity);

//INITIALIZATION FUNCTION
function init() {
    createDropdown(activityData, 0, dropdownContainerActivityNow);
    createDropdown(activityData, 0, dropdownContainerActivityNext);
    createDropdown(activityData, 0, dropdownContainerActivityThen);
};

init();

/*
//TIMELINE HTML
//SET ACTIVITY IN TIMELINE
const setTimelineActivity = function(event) {
    event.preventDefault();


}

//SET PROGRESS IN TIMELINE
const setTimelineColor = function(event) {
    event.preventDefault();

    //Get date & time
        const today = new Date();
        
        //Convert date & time to string
        const hours = today.getHours();
        const minutes = today.getMinutes();

};
*/