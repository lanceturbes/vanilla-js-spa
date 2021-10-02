/* --------------------------------- IMPORTS -------------------------------- */

import { Remarkable } from "remarkable";
import { getArticlePath } from "./../../utilities/render.js";
import axios from "axios";

/* -------------------------------------------------------------------------- */
/*                              ARTICLE COMPONENT                             */
/* -------------------------------------------------------------------------- */

const Article = (props) => {
  // Props destructuring
  const { article } = props;
  // Create elements
  const container = document.createElement("div");
  const markdownParser = new Remarkable();
  // Assign classes
  container.className = "";
  // Request data / assign content
  axios
    .get(getArticlePath(article))
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .then((text) => {
      container.innerHTML = markdownParser.render(text);
    });
  // Return container element
  return container;
};

/* --------------------------------- EXPORTS -------------------------------- */

export default Article;
