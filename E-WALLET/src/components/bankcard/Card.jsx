import React from "react";
import "./Card.css";

export default function Card({ cardDetails }) {
  if (!cardDetails) {
    return null;
  }

  const { cardNumber, cardholderName, validThru, ccv, vendor } = cardDetails;

  const maxDigits = 16;

  const formattedCardNumber = cardNumber
    ? cardNumber.match(/.{1,4}/g).join(" ")
    : "";

  const cardClassName = `card card-${vendor}`;

  const getBlippTheme = () => {
    switch (vendor) {
      case "bitcoin":
        return "blipp_dark";
      case "ninja":
      case "evil":
      case "chain":
        return "blipp_light";
      default:
        return "blipp_light";
    }
  };

  return (
    <article className={cardClassName}>
      <header className="card-header">
        <div className="blipp-and-chip">
          <img
            src={`./src/assets/${getBlippTheme()}.png`}
            className="blipp"
            alt="blipp-icon"
          />
          <img src="./src/assets/chip.png" className="chip" alt="chip-icon" />
        </div>
        <div className="bank-logo-container">
          <img
            src={`./src/assets/${vendor}.png`}
            className="bank-logo"
            alt="bank-logo"
          />
          {/* <img src={`/${vendor}-logo.png`} alt={`${vendor} Logo`} /> */}
        </div>
      </header>
      <section className="card-body">
        <div className="card-number">{formattedCardNumber}</div>
        <div className="card-labels">
          <p className="card-label">Cardholder name</p>
          <p className="card-label">Valid thru</p>
        </div>
        <div className="card-content">
          <p className="card-holder">{cardholderName}</p>
          <p className="valid-thru">{validThru}</p>
        </div>
      </section>
    </article>
  );
}
