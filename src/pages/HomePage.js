import Jumbotron from "./../components/Jumbotron";
import jumboImage from "./../assets/grazing-beast.jpg";

const HomePage = () => {
  const container = document.createElement("section");

  const elements = [
    Jumbotron({
      backgroundImage: jumboImage,
      title: "Grazing Beast",
      subtitle: "Experience the Wild",
    }),
  ];

  elements.forEach((element) => {
    container.appendChild(element);
  });

  return container;
};

export default HomePage;
