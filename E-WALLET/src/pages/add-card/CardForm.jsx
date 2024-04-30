import React, { useState } from "react";
import "./CardForm.css";

const CardForm = ({
  onCardNumberChange,
  onCardholderNameChange,
  onValidThruChange,
  onVendorChange,
}) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardholderName: "",
    validThru: "",
    cvv: "",
    vendor: "",
  });

  const handleNameChange = (newName) => {
    setFormData((prevData) => ({
      ...prevData,
      cardholderName: newName,
    }));
    onCardholderNameChange(newName); // Uppdatera cardholderName i huvudkomponenten
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "vendor") {
      onVendorChange(value); // Skicka det valda leverantörs-ID till förälderkomponenten
    }

    // Formatera Valid Thru som MM/YY
    if (name === "validThru") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.substring(0, 5), // Begränsa till MM/YY format
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    if (name === "cardNumber") {
      const formattedCardNumber = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ");
      onCardNumberChange(formattedCardNumber);
    }

    if (name === "cardholderName") {
      const containsSpace = value.includes(" ");
      const formattedName = containsSpace
        ? value
            .split(" ")
            .map((namePart) => namePart.trim())
            .join(" ") // Gå med i de separerade namnen med ett mellanslag
        : value; // Ta bort mellanslag i början och slutet av strängen
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedName,
      }));
      onCardholderNameChange(formattedName);
      handleNameChange(formattedName);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    if (name === "validThru") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.substring(0, 5),
      }));
      onValidThruChange(value.substring(0, 5)); // Anropa onValidThruChange för att uppdatera validthru-datumet
    }
  };

  // ********************************************************************
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Här hanteras form submission, syns i console log
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-container">
        <label className="form-input">
          <p className="form-heading">Card Number</p>
          <input
            type="number"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength={16}
            className="large-input"
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label className="form-input">
          <p className="form-heading">Cardholder Name</p>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            className="large-input"
            pattern="[a-zA-Z ]+"
            required
          />
        </label>
      </div>
      <div className="small-form-container">
        <label className="form-input">
          <p className="form-heading">Valid Thru</p>
          <input
            type="text"
            id="validThru"
            name="validThru"
            value={formData.validThru}
            onChange={handleChange}
            className="small-input"
            placeholder="MM/YY"
            maxLength={5}
            required
          />
        </label>
        <label className="form-input">
          <p className="form-heading">CVV</p>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            maxLength={3}
            className="small-input"
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label className="form-input">
          <p className="form-heading">VENDOR</p>
          <select
            id="vendor"
            name="vendor"
            value={formData.vendor}
            onChange={handleChange}
            className="large-input"
            required
          >
            <option value="">Select Vendor</option>
            <option value="1">Bitcoin Inc</option>
            <option value="2">Ninja Bank</option>
            <option value="3">Block Chain Inc</option>
            <option value="4">Evil Corp</option>
          </select>
        </label>
      </div>
    </form>
  );
};

export default CardForm;
