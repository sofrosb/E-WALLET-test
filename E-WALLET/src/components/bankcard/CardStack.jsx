import React from "react";
import Card from "./Card";
import "./CardStack.css";
import { useState } from "react";

export default function CardStack() {
  const [cards, setCards] = useState([
    {
      id: 1,
      cardNumber: "1234567891011123",
      cardholderName: "Rachel Richter",
      validThru: "12/24",
      ccv: "123",
      vendor: "bitcoin",
    },
    {
      id: 2,
      cardNumber: "9876543210987654",
      cardholderName: "Rachel Richter",
      validThru: "11/23",
      ccv: "456",
      vendor: "ninja",
    },
    {
      id: 3,
      cardNumber: "1234567890123456",
      cardholderName: "Rachel Richter",
      validThru: "1/23",
      ccv: "456",
      vendor: "chain",
    },
    {
      id: 4,
      cardNumber: "6666666666666666",
      cardholderName: "Rachel Richter",
      validThru: "10/24",
      ccv: "666",
      vendor: "evil",
    },
    {
      id: 5,
      cardNumber: "1122334455667788",
      cardholderName: "Rachel Richter",
      validThru: "9/25",
      ccv: "888",
      vendor: "bitcoin",
    },
  ]);

  const [activeCard, setActiveCard] = useState(cards[0]);

  const handleClick = (card) => {
    console.log("Kortet klickat", card);
    setActiveCard(card);
  };

  const moveActiveCardToTop = () => {
    if (activeCard) {
      const updatedCards = [...cards];
      const activeCardIndex = updatedCards.findIndex(
        (c) => c.id === activeCard.id
      );
      console.log("Active card index", activeCardIndex);
      const tempCard = updatedCards[activeCardIndex];
      updatedCards[activeCardIndex] = updatedCards[0];
      updatedCards[0] = tempCard;
      console.log("Updated cards", updatedCards);
      setCards(updatedCards);
    }
  };

  const renderActiveCard = () => {
    if (activeCard) {
      return (
        <div className="active-card-container">
          <Card cardDetails={activeCard} />
        </div>
      );
    }
    return null;
  };

  return (
    <main>
      {renderActiveCard()}
      <section className="card-container">
        {cards.map((card, index) => (
          <article
            key={card.id}
            className="card-container__card"
            style={{ top: `${index * 50}px` }}
            onClick={() => {
              handleClick(card);
              moveActiveCardToTop();
            }}
          >
            <Card cardDetails={card} />
          </article>
        ))}
      </section>
    </main>
  );
}
