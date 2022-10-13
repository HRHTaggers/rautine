"use strict";

import {
  flashcardDisplay, flashcardDropdown, displayFlashcardBtn, clearFlashcardBtn
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
});

clearFlashcardBtn.addEventListener("click", function () {
  clearVisuals(flashcardDisplay);
});

footerView();