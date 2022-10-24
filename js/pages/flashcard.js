"use strict";

//import { selectedUser } from "./index.js";
import { starAudio, flashcardPersonalizationHeading, flashcardDisplay, flashcardDropdown, displayFlashcardBtn, clearFlashcardBtn, personalizationSelect
} from "../selectors.js";
import { createDropdown } from "../components/dropdown.js";
import { state } from "../components/model.js";
import { headerView } from "../components/header.js";
import { navView } from "../components/nav.js";
import { setVisual } from "../components/setVisual.js";
import { clearVisuals } from "../components/clearVisual.js";
import { footerView } from "../components/footer.js";

headerView();

navView();

createDropdown(state.activityData, 0, flashcardDropdown);

displayFlashcardBtn.addEventListener("click", function () {
  setVisual(flashcardDropdown, flashcardDisplay);
  flashcardPersonalizationHeading.classList.remove(`hidden`);
  flashcardPersonalizationHeading.innerHTML = `
    <div class="flashcard-panel__instructions">tap on the picture to choose your activity</div>
    <div class="flashcard-panel__instructions--symbol">👇</div>
  `;
});

flashcardDisplay.addEventListener("click", function() {
  flashcardDisplay.classList.remove(`hidden`);
  flashcardDisplay.innerHTML = `
  <div class="col display-panel__flashcard display-panel__flashcard--5" id="flashcard-display-panel-column">
    <figure class="display-panel" id="display-panel-icon">
      🌟
    </figure>
    <div class="display-panel__title" id="display-panel-title">
      great! let's start
    </div>
  </div>
  `;
  starAudio.play();
});

clearFlashcardBtn.addEventListener("click", function () {
  clearVisuals(flashcardDisplay);
  clearVisuals(flashcardPersonalizationHeading);
  flashcardPersonalizationHeading.classList.add(`hidden`);
  flashcardDisplay.classList.add(`hidden`);
});

footerView();