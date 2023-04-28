import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function Header() {
  const [isShown, setIsShown] = useState(true);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 320 && window.innerWidth < 748) {
        setIsShown(true);
      }
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="header">
      {!isShown && (
        <div className="modal_hide">
          <div className="modal_hide-blur1"></div>
          <div className="modal_hide-blur2"></div>
          <div className="linear_menu">
            <div className="logo">
              <Link to="/">
                <img
                  src="../image/nexsphere-logo.png"
                  alt="qweqwe"
                  onClick={handleClick}
                />
              </Link>
            </div>
            <img
              src="../image/linear-hamburger-menu-close.png"
              alt="qweqwe"
              onClick={handleClick}
            />
          </div>
          <div className="detailgroup">
            <p>
              <Link to="/companies" onClick={handleClick}>
                Companies
              </Link>
            </p>
            <Link to="/contact" onClick={handleClick}>
              Contact
            </Link>
          </div>
          <div className="icongroup">
            <a href="https://www.linkedin.com/company/nexsphere">
              <img
                src="../image/linkedin-icon.png"
                alt="qweqwe"
                style={{ marginRight: "30px" }}
              />
            </a>
            <img src="../image/singapore-icon-xl.png" alt="qweqwe" />
          </div>
        </div>
      )}
      {isShown && (
        <div className="modal_view">
          <div className="icon_group">
            <a href="https://www.linkedin.com/company/nexsphere">
              <img
                src="../image/linkedin-icon.png"
                alt="qweqwe"
                style={{ marginRight: "30px" }}
              />
            </a>
            <img src="../image/singapore-icon-xl.png" alt="qweqwe" />
          </div>
          <div className="logo">
            <Link to="/">
              <img src="../image/nexsphere-logo.png" alt="qweqwe" />
            </Link>
          </div>
          <div className="detail_group">
            <span className="left">
              <Link to="/companies">Companies</Link>
            </span>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="linear_menu" onClick={handleClick}>
            <img src="../image/linear-hamburger-menu.png" alt="qweqwe" />
          </div>
        </div>
      )}
    </div>
  );
}
export default Header;
