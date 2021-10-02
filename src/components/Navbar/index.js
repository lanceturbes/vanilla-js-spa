/* --------------------------------- IMPORTS -------------------------------- */

import { setPage } from "./../../utilities/render.js";
import "./Navbar.css";

/* -------------------------------------------------------------------------- */
/*                              NAVBAR COMPONENT                              */
/* -------------------------------------------------------------------------- */

const Navbar = () => {
  // Create elements
  const container = document.createElement("header");
  const body = document.createElement("div");
  const leftSide = document.createElement("div");
  const rightSide = document.createElement("nav");
  const websiteName = document.createElement("h3");
  const homeLink = document.createElement("a");
  const aboutLink = document.createElement("a");
  // Append elements
  const bodyElements = [leftSide, rightSide];
  const leftSideElements = [websiteName];
  const rightSideElements = [homeLink, aboutLink];
  container.appendChild(body);
  bodyElements.forEach((element) => {
    body.appendChild(element);
  });
  leftSideElements.forEach((element) => {
    leftSide.appendChild(element);
  });
  rightSideElements.forEach((element) => {
    rightSide.appendChild(element);
  });
  // Assign content
  websiteName.textContent = "Pooch's Corner";
  homeLink.textContent = "HOME";
  aboutLink.textContent = "ABOUT";
  // Assign classes
  container.className = "navbar";
  body.className = "body";
  leftSide.className = "left";
  rightSide.className = "right";
  // Attach event listeners
  homeLink.addEventListener("click", () => {
    setPage("home");
  });
  aboutLink.addEventListener("click", () => {
    setPage("about");
  });
  // Return the container element
  return container;
};

/* --------------------------------- EXPORTS -------------------------------- */

export default Navbar;
