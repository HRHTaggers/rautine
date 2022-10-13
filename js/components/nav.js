import { nav } from "../selectors.js";

export const navView = function() {
    nav.innerHTML = `
        <ul class="nav__list">
            <li class="nav__item nav__item nav__item">
                <a href="/index.html" class="nav__item--link">
                    home
                </a>
            </li>
            <li class="nav__item">
                <a href="/flashcard.html" class="nav__item--link">
                    flashcard
                </a>
            </li>
            <li class="nav__item nav__item nav__item">
                <a href="/nnt.html" class="nav__item--link">
                    now|next|then
                </a>
            </li>
            <li class="nav__item">
                <a href="/routine.html" class="nav__item--link">
                    routine
                </a>
            </li>
        </ul>
    `;
};