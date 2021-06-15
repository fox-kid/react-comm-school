import React from "react";

function CustomInput({ label, name, type, value, setValue }) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}

export default CustomInput;
