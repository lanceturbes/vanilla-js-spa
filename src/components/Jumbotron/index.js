const Jumbotron = (props) => {
  const { backgroundImage, title, subtitle } = props;
  const container = document.createElement("div");
  container.className = "Jumbotron";
  container.style.backgroundImage = `url("${backgroundImage}")`;

  container.innerHTML = `
    <h2>${title}</h2>
    <h3>${subtitle}</h3>
  `;

  return container;
};

export default Jumbotron;
