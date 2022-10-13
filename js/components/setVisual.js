import { state } from "./model.js";

export const setVisual = function (dropdown, parentEl) {
  const selectedActivity = dropdown.value;
  const selectedActivityIcon =
    state.activityData[dropdown.selectedIndex].icon;
  parentEl.insertAdjacentHTML(
    `beforeend`,
    `
        <div class="col display-panel__flashcard display-panel__flashcard--${
          Math.trunc(Math.random() * 5) + 1
        }">
            <figure class="display-panel" id="display-panel-icon">
                ${selectedActivityIcon}
            </figure>
            <div class="display-panel__title" id="display-panel-title">
                ${selectedActivity}
            </div>
        </div>
        `
  );
};
