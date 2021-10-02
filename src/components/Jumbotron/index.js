/* --------------------------------- IMPORTS -------------------------------- */

import "./Jumbotron.css";

/* -------------------------------------------------------------------------- */
/*                             JUMBOTRON COMPONENT                            */
/* -------------------------------------------------------------------------- */

const Jumbotron = (props) => {
  // Destructure props
  const { backgroundImage, title, subtitle } = props;
  // Create elements
  const container = document.createElement("div");
  const body = document.createElement("div");
  const titleElement = document.createElement("h2");
  const subtitleElement = document.createElement("h3");
  // Append elements
  const bodyElements = [titleElement, subtitleElement];
  container.appendChild(body);
  bodyElements.forEach(element => {
    body.appendChild(element);
  });
  // Assign content
  titleElement.textContent = title;
  subtitleElement.textContent = subtitle;
  // Assign classes
  container.className = "jumbotron";
  body.className = "body";
  // Override styles
  container.style.backgroundImage = `url("${backgroundImage}")`;
  // Return the container element
  return container;
};

/* --------------------------------- EXPORTS -------------------------------- */

export default Jumbotron;
