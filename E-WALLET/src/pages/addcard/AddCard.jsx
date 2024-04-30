import Card from "../../components/bankcard/Card";
import React, { useState } from "react";
import { ButtonAddcard } from "../../components/button/ButtonAddCard";
import { PageTitle } from "../../components/pagetitle/PageTitle";
import CardForm from "../add-card/CardForm";

export function AddCard() {
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardholderName, setCardholderName] = useState("FIRSTNAME LASTNAMNE");
  const [validThru, setValidThru] = useState("MM/YY");
  const [vendor, setVendor] = useState("");

  const handleCardNumberChange = (newCardNumber) => {
    setCardNumber(newCardNumber);
  };

  const handleCardholderNameChange = (newCardholderName) => {
    setCardholderName(newCardholderName);
  };

  const handleNameChange = (newName) => {
    setCardholderName(newName);
  };

  const handleValidThruChange = (newValidThru) => {
    setValidThru(newValidThru);
  };

  const handleVendorChange = (newVendor) => {
    setVendor(newVendor);
  };

  return (
    <>
      <PageTitle title={"ADD A NEW BANK CARD"} secondTitle={"NEW CARD"} />
      <Card
        cardNumber={cardNumber}
        cardholderName={cardholderName}
        validThru={validThru}
        vendor={vendor}
      />
      <CardForm
        onCardNumberChange={handleCardNumberChange}
        onCardholderNameChange={handleCardholderNameChange}
        handleNameChange={handleNameChange}
        onValidThruChange={handleValidThruChange}
        onVendorChange={handleVendorChange}
      />
      <ButtonAddcard />
    </>
  );
}
