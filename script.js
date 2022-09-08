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
const dropdownContainerActivity = document.querySelector(`.routine-input__form--dropdown-container-activity-now`);
const dropdownContainerTiming = document.querySelector(`.routine-input__form--dropdown-container-timing-now`);
const headerDate = document.querySelector(`.header__date`);
const activityNow = document.querySelector(`.transition-panel__description--now`);

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

const timingData = [
  {
    name: 5,
    category: "short-term",
    color: "red",
  },
  {
    name: 10,
    category: "short-term",
    color: "amber",
  },
  {
    name: 15,
    category: "medium-term",
    color: "amber",
  },
];

console.log(activityData);

//SET TIME
const setDate = function() {

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

    const updateTime = setTimeout(function() {setDate()}, 60000);
};

//DYNAMIC DROPDOWN - ACTIVITIES
const createDropdown = function(array, i, parentEl) {

    for(i = 0; i < array.length; i++) {
        let option = document.createElement(`option`);
        option.value = array[i].name;
        option.textContent = array[i].name;
        option.classList.add(`option-${array[i].name}`);
        parentEl.appendChild(option);
        console.log(option);
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

//CREATE ACTIVITY


//SET ACTIVITY & TIMING FROM DROPDOWNS
const selectActivity = function(event) {
    event.preventDefault();

    const selectedActivity = dropdownContainerActivity.value;
    console.log(selectedActivity);
    activityNow.innerHTML = selectedActivity;
};

dropdownContainerActivity.addEventListener(`click`, selectActivity);

//INITIALIZATION FUNCTION
const init = function() {
    createDropdown(activityData, 0, dropdownContainerActivity);
    createDropdown(timingData, 0, dropdownContainerTiming);
    setDate();
};

init();