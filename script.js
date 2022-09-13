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
const headerDate = document.querySelector(`.header__date`);
const activityIconNow = document.querySelector(`.transition-panel__icon--now`);
const activityDescNow = document.querySelector(`.transition-panel__description--now`);
const timeRemainingNow = document.querySelector(`.transition-panel__time--now`);
const timingNow = document.querySelector(`.routine-input__form--timing-now`);
const submitBtnNow = document.querySelector(`.routine-input__form--btn-now`);

//DATA OBJECTS
const activityData = [
  {
    name: "Snack",
    category: "Eat",
    icon: `<i class="fa-solid fa-apple-whole"></i>`,
  },
  {
    name: "Nap",
    category: "Sleep",
    icon: `<i class="fa-solid fa-bed"></i>`,
  },
  {
    name: "Music",
    category: "Play",
    icon: `<i class="fa-solid fa-music"></i>`,
  },
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
        const weekday = weekdays[(today.getDay() - 1)];
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
const createDropdown = function (array, i, parentEl) {

    for(i = 0; i < array.length; i++) {
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

  //Update activity from dropdown selection in DOM - decription & icon
  const selectedActivity = dropdownContainerActivityNow.value;
  activityDescNow.innerHTML = selectedActivity;
  activityIconNow.innerHTML = activityData[dropdownContainerActivityNow.selectedIndex].icon;


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

      //Calculate remaining time & update DOM
      const timeRemaining = totalMinutesEnd - totalMinutesNow;
      timeRemainingNow.innerHTML = `Time left: ${timeRemaining} minutes`;
    }
    setFinishTime();
  }, 1000);

};

submitBtnNow.addEventListener(`click`, selectActivity);

//INITIALIZATION FUNCTION
const init = function() {
    createDropdown(activityData, 0, dropdownContainerActivityNow);
    createDropdown(activityData, 0, dropdownContainerActivityNext);
    createDropdown(activityData, 0, dropdownContainerActivityThen);
};

init();