import TestCard from "./../components/TestCard";

const HomePage = () => {
  const container = document.createElement("section");

  const elements = [TestCard()];

  elements.forEach((element) => {
    container.appendChild(element);
  });

  return container;
};

export default HomePage;
