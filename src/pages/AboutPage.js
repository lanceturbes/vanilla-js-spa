const AboutPage = () => {
  const container = document.createElement("section");

  const description = document.createElement("p");
  description.textContent = "Test";

  const elements = [description];

  elements.forEach((element) => {
    container.appendChild(element);
  });

  return container;
};

export default AboutPage;
