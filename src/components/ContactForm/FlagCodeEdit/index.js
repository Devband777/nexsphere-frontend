import React, { useState, useEffect } from "react";
import FlagCodeOne from "./FlagCodeOne";
import CountryFlagSvg from "country-list-with-dial-code-and-flag/dist/flag-svg";
import CountryList from "country-list-with-dial-code-and-flag";
import "./style.scss";
function FlagEditCode() {
  let [flag, setFlag] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  let myanmar = CountryList.findOneByCountryCode("mm");

  let flagSvg = CountryFlagSvg[myanmar.code];
  useEffect(() => {
    setFlag(flagSvg);
  }, [flagSvg]);

  return (
    <div className="flagEditCode">
      <div className="flagEditCode-header" onClick={handleClick}>
        <div className="flag" dangerouslySetInnerHTML={{ __html: flag }}></div>
        <div className="dialcode">{myanmar.dial_code}</div>
        <div className={`flagCodeDropdown ${isExpanded ? "hidden" : ""}`}>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <img src="../image/Vector.png" alt="qwe" />
          </div>
          <FlagCodeOne code="mm" />
          <FlagCodeOne code="si" />
          <FlagCodeOne code="us" />
          <FlagCodeOne code="in" />
        </div>
      </div>
      <div className="flagEditCode-body">
        <input onClick={handleClick} />
      </div>
    </div>
  );
}
export default FlagEditCode;
