import { header } from "../selectors.js";

export const headerView = function() {

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
      const currentTime = `${weekday}, ${date} ${month} ${year}, ${
        hours < 12 ? `0` : ``
      }${hours}:${minutes < 10 ? `0` : ``}${minutes}`;
      const headerDate = document.querySelector(`.header__date`);
      headerDate.innerHTML = `${currentTime}`;
    }
    setDate();
  }, 1000);

    header.innerHTML = `
        <div class="header__date header__date--flashcard"></div>
        <img src="/src/img/rAutine-logo-white.png" alt="rAutine logo" class="header__logo" />
    `;

}