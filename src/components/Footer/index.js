import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p>
        © - Copyright 2023 - Nexsphere Holdings Pte Ltd (UEN: 202222334K),
        Singapore.
      </p>

      <Link to="/termandconditions">
        <p style={{ color: "#9d9dad" }}>Terms & Conditions</p>
      </Link>
    </div>
  );
}

export default Footer;
