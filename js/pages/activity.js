'use strict';

import { activityDropdown, activityDisplayCard, displayActivityBtn, clearActivityBtn } from "../selectors.js";
import { createDropdown } from "../components/dropdown.js";
import { state } from "../components/model.js";
import { headerView } from "../components/header.js";
import { navView } from "../components/nav.js";
import { setVisual } from "../components/setVisual.js";
import { clearVisuals } from "../components/clearVisual.js";
import { footerView } from "../components/footer.js";

headerView();

navView();

createDropdown(state.activityData, 0, activityDropdown);

displayActivityBtn.addEventListener("click", function() {
    setVisual(activityDropdown, activityDisplayCard);
});

clearActivityBtn.addEventListener("click", function() {
    clearVisuals(activityDisplayCard);
});

footerView();