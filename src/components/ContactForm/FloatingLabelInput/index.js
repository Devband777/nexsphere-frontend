import React, { useState } from "react";
import "./style.scss";
function FloatingLabelInput({ imageUrl, label }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (event) => setValue(event.target.value);

  return (
    <div
      className={`floatingLabelInput ${isFocused || value ? "has-value" : ""}`}
    >
      <input
        type="input"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label>
        <img src={imageUrl} alt="user icon" /> {label}
      </label>
    </div>
  );
}

export default FloatingLabelInput;
