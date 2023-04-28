import React from "react";
import { useState, useEffect } from "react";
import CountryFlagSvg from "country-list-with-dial-code-and-flag/dist/flag-svg";
import CountryList from "country-list-with-dial-code-and-flag";
import "./style.scss";
function FlagCodeOne(props) {
  let codename = props.code;
  console.log(codename);
  const [flagCode, setFlagCode] = useState("");
  let myanmar = CountryList.findOneByCountryCode(codename);
  let flagSvg = CountryFlagSvg[myanmar.code];
  console.log({ flagSvg });
  useEffect(() => {
    setFlagCode(flagSvg);
  }, [flagSvg]);
  return (
    <div className="flagCodeOne">
      <div class="border-left" />
      <div
        className="flag"
        dangerouslySetInnerHTML={{ __html: flagCode }}
      ></div>
      <div className="dialcode">{myanmar.dial_code}</div>
      <img src="../image/selected-icon.png" alt="qwe" />
    </div>
  );
}
export default FlagCodeOne;
