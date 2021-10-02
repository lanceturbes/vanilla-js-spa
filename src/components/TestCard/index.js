import "./TestCard.css";

const TestCard = () => {
  const container = document.createElement("div");

  container.innerHTML = `
    <p>CARD ELEMENT</p>
  `;

  return container;
}

export default TestCard;