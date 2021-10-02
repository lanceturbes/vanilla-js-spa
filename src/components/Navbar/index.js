/* --------------------------------- IMPORTS -------------------------------- */

import { setPage } from "./../../utilities/render.js";
import "./Navbar.css";

/* ------------------------------- DEFINITIONS ------------------------------ */

const Navbar = () => {
  const container = document.createElement("header");
  container.className = "navbar";

  const homeLink = document.createElement("a");
  const aboutLink = document.createElement("a");

  homeLink.addEventListener("click", () => {
    setPage("home");
  });
  aboutLink.addEventListener("click", () => {
    setPage("about");
  });

  homeLink.textContent ="HOME";
  aboutLink.textContent = "ABOUT";

  const elements = [homeLink, aboutLink];

  elements.forEach((element) => {
    container.appendChild(element);
  });

  return container;
};

/* --------------------------------- EXPORTS -------------------------------- */

export default Navbar;
