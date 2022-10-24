//GENERIC
export const footer = document.querySelector(`.footer`);
export const header = document.querySelector(`.header`);
export const nav = document.querySelector(`.nav`);

//INDEX PAGE
export const personalizeName = document.getElementById(`personalization-name`);
export const personalizePetname = document.getElementById(`personalization-petname`);
export const personalizeBtn = document.getElementById(`personalization-btn`);
export const personalizationForm = document.getElementById(`personalization-form`);
export const personalizationSelect = document.getElementById(`personalization-child-selection`);

//ACTIVITY PAGE
export const activityDropdown = document.getElementById(`activity-dropdown`);
export const activityDisplayCard = document.getElementById(`display-activity-panel-body`);
export const displayActivityBtn = document.getElementById(`display-activity-btn`);
export const clearActivityBtn = document.getElementById(`clear-activity-btn`);

//FLASHCARD PAGE
export const flashcardSubheader = document.getElementById(`flashcard-subheader`);
export const flashcardDropdown = document.getElementById(`flashcard-dropdown`);
export const flashcardDisplay = document.getElementById(`display-panel-body`);
export const flashcardIcon = document.getElementById(`display-panel-icon`);
export const flashcardTitle = document.getElementById(`display-panel-title`);
export const displayFlashcardBtn = document.getElementById(`display-flashcard-btn`);
export const clearFlashcardBtn = document.getElementById(`clear-flashcard-btn`);
export const flashcardPersonalizationHeading = document.getElementById(`flashcard-personalization-heading`);
export const flashcardDisplayColumn = document.querySelector(`.display-panel__flashcard`);

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

//ROUTINE PAGE - Timeslots
export const timeslots = document.querySelectorAll(`.timeslot`);
export const activitySlots = document.querySelectorAll(`.activitySlot`);
export const completionSlots = document.querySelectorAll(`.completionSlot`);
export const weekdayMarkup = document.getElementById(`weekday-markup`);

export const modalWindowRoutine =
  document.getElementById(`modal-window-routine`);
export const modalButtonRoutine = document.getElementById(
  `modal-window-btn-routine`
);

//ROUTINE PAGE - Recognition Modal
export const modalWindowRecognition =
  document.getElementById(`modal-window-stars`);
export const modalContentRecognition = document.getElementById(
  `modal-window-stars-content`
);
export const modalButtonRecognition = document.getElementById(
  `modal-window-btn-stars`
);
export const openRecognitionModal = document.getElementById(`open-stars-modal`);
export const modalNightscreen = document.getElementById(`modal-nightscreen`);


//AUDIO
export const fiveMinuteWarningAudio = new Audio(`src/5-min-warning.wav`);
export const timeUpWarningAudio = new Audio(`src/time-up-warning-mp3.mp3`);
export const starAudio = new Audio(`src/star-audio.wav`);
export const lullabyAudio = new Audio(`src/lullaby.mp3`);