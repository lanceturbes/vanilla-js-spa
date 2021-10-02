/* --------------------------------- IMPORTS -------------------------------- */

import Navbar from "./../components/Navbar";
import HomePage from "./../pages/HomePage.js";
import AboutPage from "./../pages/AboutPage.js";

/* --------------------------------- DRAWING -------------------------------- */

export const clearPage = () => {
  const root = document.querySelector("#root");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
};

export const buildPage = (pageName) => {
  const root = document.querySelector("#root");
  root.appendChild(Navbar());

  if (pageName === "home") {
    root.appendChild(HomePage());
  } else if (pageName === "about") {
    root.appendChild(AboutPage());
  } else {
    const invalidLayoutError = document.createElement("h1");
    invalidLayoutError.textContent = "ERROR: INVALID/MISSING LAYOUT!!!";
    root.appendChild(invalidLayoutError);
  }
};

export const render = (state) => {
  clearPage();
  buildPage(state.currentPage);
};

/* ---------------------------- STATE MANAGEMENT ---------------------------- */

export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getState = () => {
  const initialState = { currentPage: "home" };
  const storedState = getFromLocalStorage("appState");

  if (storedState) {
    return storedState;
  } else {
    return initialState;
  }
};

export const setPage = (page) => {
  const oldState = getState();

  const newState = oldState
    ? { ...oldState, currentPage: page }
    : console.error("YOU NEED TO RENDER BEFORE CALLING SETPAGE!!!");
    
  localStorage.setItem(
    "appState",
    JSON.stringify(Object.assign({}, oldState, newState))
  );
  return render(getState());
};
