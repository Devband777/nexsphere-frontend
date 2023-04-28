import React, { useState, useRef } from "react";
import "./style.scss";
function SelectControl({ imageUrl, label, name }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (event) => setValue(event.target.value);
  const [isDownVector, changeVector] = useState(true);
  const [isMenu, openMenu] = useState(false);
  const wrapperRef = useRef(null);
  return (
    <div className={`selectControl ${isFocused || value ? "has-value" : ""}`}>
      <div className="inputChannel">
        <input
          type="input"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={wrapperRef}
        />
        <div className="arrowImage" />
      </div>
      <div className="dropdown-box">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <img src="../image/Vector.png" alt="qwe" />
        </div>
        <div className="country-menu">
          {name.map((Url) => (
            <div
              className="country-select"
              onClick={() => {
                openMenu(!isMenu);
                changeVector(!isDownVector);
              }}
            >
              <div class="border-left"></div>
              <div class="content">
                <p>{Url}</p>
                <img src="../image/selected-icon.png" alt="qwe" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <label>
        <img src={imageUrl} alt="user icon" /> {label}
      </label>
    </div>
  );
}

export default SelectControl;
