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
  }
  setDate();
}, 1000);

setDate();
