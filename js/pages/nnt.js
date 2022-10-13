`use strict`;

import { timeUpWarningAudio, fiveMinuteWarningAudio, submitBtn, formInput, timeRemainingNext, timeRemainingThen, timingNow, timingNext, timingThen, activityIconNext, activityIconNow, activityIconThen, timeRemainingNow, modalButtonNNT, modalWindowNNT, activityDescNext,
activityDescNow, activityDescThen, dropdownContainerActivityNext, dropdownContainerActivityNow, dropdownContainerActivityThen, dropdownContainerTimingNext, dropdownContainerTimingNow, dropdownContainerTimingThen } from "../selectors.js";
import { createDropdown } from "../components/dropdown.js";
import { state } from "../components/model.js";
import { headerView } from "../components/header.js";
import { navView } from "../components/nav.js";
import { footerView } from "../components/footer.js";

//MODAL WINDOW REVEAL - INDEX
const closeNNTModal = function() {
  modalButtonNNT.addEventListener(`click`, function () {
      modalWindowNNT.classList.add(`hidden`);
    });
};

closeNNTModal();

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

        } setDate();
    }, 1000
);

//SET ACTIVITY & TIMING IN PANEL FROM DROPDOWNS
const selectActivity = function(event) {
  event.preventDefault();

  //Update activity from dropdown selection in DOM - deacription & icon
  const selectedActivityNow = dropdownContainerActivityNow.value;
  activityDescNow.innerHTML = selectedActivityNow;
  activityIconNow.innerHTML = state.activityData[dropdownContainerActivityNow.selectedIndex].icon;

  const selectedActivityNext = dropdownContainerActivityNext.value;
  activityDescNext.innerHTML = selectedActivityNext;
  activityIconNext.innerHTML =
    state.activityData[dropdownContainerActivityNext.selectedIndex].icon;

  const selectedActivityThen = dropdownContainerActivityThen.value;
  activityDescThen.innerHTML = selectedActivityThen;
  activityIconThen.innerHTML =
    state.activityData[dropdownContainerActivityThen.selectedIndex].icon;

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
dropdownContainerTimingNow.addEventListener(`change`, () => {
  timingNext.value = timingNow.value;
});

//SET START TIME FOR THEN ACTIVITY BASED ON NEXT INPUT
dropdownContainerActivityNext.addEventListener(`change`, () => {
  timingThen.value = timingNext.value;
});

//EVENT LISTENERS
submitBtn.addEventListener(`click`, selectActivity);

//INITIALIZATION FUNCTION
function init() {
  createDropdown(state.activityData, 0, dropdownContainerActivityNow);
  createDropdown(state.activityData, 0, dropdownContainerActivityNext);
  createDropdown(state.activityData, 0, dropdownContainerActivityThen);
}

init();

headerView();

navView();

footerView();
