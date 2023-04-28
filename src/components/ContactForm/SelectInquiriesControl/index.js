import React, { useState, useRef } from "react";
import "./style.scss";
function SelectInquiriesControl({ imageUrl, label, name }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (event) => setValue(event.target.value);
  const [isDownVector, changeVector] = useState(true);
  const [isMenu, openMenu] = useState(false);
  const wrapperRef = useRef(null);
  return (
    <div
      className={`selectInquiriesControl ${
        isFocused || value ? "has-value" : ""
      }`}
    >
      <div className="inputInquiriesChannel">
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

      <div className="selectInquiriesControl-dropdown-box">
        <div className="selectInquiriesControl-Inquiries-menu">
          {name.map((Url) => (
            <div
              className="Inquiries-select"
              onClick={() => {
                openMenu(!isMenu);
                changeVector(!isDownVector);
              }}
            >
              <div class="selectInquiriesControl-border-left"></div>
              <div class="selectInquiriesControl-content">
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

export default SelectInquiriesControl;
