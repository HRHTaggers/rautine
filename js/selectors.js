//GENERIC
export const footer = document.querySelector(`.footer`);
export const header = document.querySelector(`.header`);
export const nav = document.querySelector(`.nav`);

//ACTIVITY PAGE
export const activityDropdown = document.getElementById(`activity-dropdown`);
export const activityDisplayCard = document.getElementById(`display-activity-panel-body`);
export const displayActivityBtn = document.getElementById(`display-activity-btn`);
export const clearActivityBtn = document.getElementById(`clear-activity-btn`);

//FLASHCARD PAGE
export const flashcardDropdown = document.getElementById(`flashcard-dropdown`);
export const flashcardDisplay = document.getElementById(`display-panel-body`);
export const flashcardIcon = document.getElementById(`display-panel-icon`);
export const flashcardTitle = document.getElementById(`display-panel-title`);
export const displayFlashcardBtn = document.getElementById(`display-flashcard-btn`);
export const clearFlashcardBtn = document.getElementById(`clear-flashcard-btn`);

//NNT PAGE
export const formInput = document.querySelector(`.routine-input__form`);
export const activityFormNow = document.querySelector(`.routine-input__form`);
export const dropdownContainerActivityNow = document.querySelector(
  `.routine-input__form--dropdown-container-activity-now`
);
export const dropdownContainerActivityThen = document.querySelector(
  `.routine-input__form--dropdown-container-activity-then`
);
export const dropdownContainerActivityNext = document.querySelector(
  `.routine-input__form--dropdown-container-activity-next`
);
export const dropdownContainerTimingNow = document.querySelector(
  `.routine-input__form--timing-now`
);
export const dropdownContainerTimingNext = document.querySelector(
  `.routine-input__form--timing-next`
);
export const dropdownContainerTimingThen = document.querySelector(
  `.routine-input__form--timing-then`
);
export const submitBtn = document.querySelector(`.routine-input__form--btn`);

//NNT PAGE - Modal Window
export const modalWindowNNT = document.getElementById(`modal-window-index`);
export const modalButtonNNT = document.getElementById(`modal-window-btn-index`);

//NNT PAGE - Transition Panel
export const activityIconNow = document.querySelector(`.display-panel__icon--now`);
export const activityDescNow = document.querySelector(
  `.display-panel__description--now`
);
export const timeRemainingNow = document.querySelector(`.display-panel__time--now`);
export const timingNow = document.querySelector(`.routine-input__form--timing-now`);

export const activityIconNext = document.querySelector(`.display-panel__icon--next`);
export const activityDescNext = document.querySelector(
  `.display-panel__description--next`
);
export const timeRemainingNext = document.querySelector(`.display-panel__time--next`);
export const timingNext = document.querySelector(`.routine-input__form--timing-next`);

export const activityIconThen = document.querySelector(`.display-panel__icon--then`);
export const activityDescThen = document.querySelector(
  `.display-panel__description--then`
);
export const timeRemainingThen = document.querySelector(`.display-panel__time--then`);
export const timingThen = document.querySelector(`.routine-input__form--timing-then`);

//AUDIO
export const fiveMinuteWarningAudio = new Audio(`src/5-min-warning.wav`);
export const timeUpWarningAudio = new Audio(`src/time-up-warning-mp3.mp3`);