import React, { useState } from "react";

import CustomInput from "./CustomInput";

function isInputEmpty(firstName, lastName, email, city) {
  return !firstName || !lastName || !email || !city;
}

function Login({ setPersons }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const disableButton = isInputEmpty(firstName, lastName, email, city);

  function handleSubmit() {
    setPersons((prev) => [
      ...prev,
      { id: prev.length + 1, firstName, lastName, email, city },
    ]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setCity("");
  }
  return (
    <section className="login">
      <div className="login-wrapper">
        <CustomInput
          label="სახელი"
          name="firstName"
          type="text"
          value={firstName}
          setValue={setFirstName}
        />
        <CustomInput
          label="გვარი"
          name="lastName"
          type="text"
          value={lastName}
          setValue={setLastName}
        />
        <CustomInput
          label="ელ-ფოსტა"
          name="email"
          type="email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          label="ქალაქი"
          name="city"
          type="city"
          value={city}
          setValue={setCity}
        />
        <button
          className="button"
          onClick={handleSubmit}
          disabled={disableButton}
        >
          დამატება
        </button>
      </div>
    </section>
  );
}

export default Login;
