/*const activities = [
    {
        activity: `Snack`,
        category: `Eat`,
        icon: ``
    },
    {
        activity: `Nap`,
        category: `Sleep`,
        icon: ``
    },
    {
        activity: `Music`,
        category: `Play`,
        icon: ``
    }
];

const renderactivity = function(activity, category, icon) {
    forEach()
}
*/

//DOM REFERENCES
const activityFormNow = document.querySelector(`.routine-input__form`);
const dropdownContainerActivityNow = document.querySelector(`.routine-input__form--dropdown-container-activity-now`);
const dropdownContainerActivityThen = document.querySelector(
  `.routine-input__form--dropdown-container-activity-then`
);
const dropdownContainerActivityNext = document.querySelector(
  `.routine-input__form--dropdown-container-activity-next`
);
const dropdownContainerTimingNow = document.querySelector(`.routine-input__form--timing-now`);
const dropdownContainerTimingNext = document.querySelector(
  `.routine-input__form--timing-next`
);
const dropdownContainerTimingThen = document.querySelector(
  `.routine-input__form--timing-then`
);
const dropdownContainersAll = document.querySelectorAll(`.routine-input__form--dropdown-container`);
const headerDate = document.querySelector(`.header__date`);
const activityNow = document.querySelector(`.transition-panel__description--now`);
const timeRemainingNow = document.querySelector(`.transition-panel__time--now`);
const timingNow = document.querySelector(`.routine-input__form--timing-now`);
const submitBtnNow = document.querySelector(`.routine-input__form--btn-now`);

//DATA OBJECTS
const activityData = [
    {
        name: "Snack",
        category: "Eat",
        Icon: "",
    },
    {
        name: "Sleep",
        category: "Nap",
        Icon: "",
    },
    {
        name: "Play",
        category: "Music",
        Icon: "",
    }
];

console.log(activityData);

const today = new Date();
const seconds = today.getSeconds();
const hours = today.getHours();
const minutes = today.getMinutes();
const totalMinutesNow = (+hours * 60) + +minutes;
console.log(totalMinutesNow);

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
//window.setInterval(setDate, 1000);


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

/*for (let key in activityData) {
    let option = document.createElement("option");
    option.setAttribute(`value`, data[key]);

    let optionText = document.createTextNode("key");
    option.appendChild(optionText);

    dropdownContainer.appendChild(option);
}
*/

//SET ACTIVITY & TIMING FROM DROPDOWNS
const selectActivity = function(event) {
    event.preventDefault();

    const selectedActivity = dropdownContainerActivityNow.value;

    const finishTime = dropdownContainerTimingNow.value;

    const finishHour = finishTime.slice(0, 2) * 60;
    const finishMinute = finishTime.slice(3, 5);
    const totalMinutesEnd = +finishHour + +finishMinute;
    const timeRemaining = totalMinutesEnd - totalMinutesNow;
    
    timeRemainingNow.innerHTML = `Time left: ${timeRemaining} minutes`;
    activityNow.innerHTML = selectedActivity;

    //timeRemainingNow.innerHTML = `Time left: ${timeRemaining} minutes`;

};

//activityFormNow.addEventListener(`submit`, selectActivity);
submitBtnNow.addEventListener(`click`, selectActivity);

//CALCULATE REMAINING TIME FOR ACTIVITY
//const setIntervalTime = setInterval(
  //  selectActivity(), 1000
//);

/*const calculateTiming = function() {
    const finishTime = timingNow.value;
    console.log(finishTime);
    const timeRemaining = finishTime - (hours - minutes);
    timeRemainingNow.innerHTML = `Time left: ${timeRemaining} minutes`;
};

submitBtnNow.addEventListener(`submit`, calculateTiming);
*/

//INITIALIZATION FUNCTION
const init = function() {
    createDropdown(activityData, 0, dropdownContainerActivityNow);
    createDropdown(activityData, 0, dropdownContainerActivityNext);
    createDropdown(activityData, 0, dropdownContainerActivityThen);
};

init();