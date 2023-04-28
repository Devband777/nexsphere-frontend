import React, { useState, useRef, useEffect } from "react";
import "./style.scss";

function Company({
  companyInfo,
  category,
  status,
  bordercolor,
  categoryimageUrl,
  companyimageURL,
  flagsimageUrl,
  descriptionSentence,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const companyRef = useRef(null);

  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setIsBlinking(false), 1000);

    return () => clearTimeout(blinkTimeout);
  }, [isBlinking]);

  const handleCompanyClick = () => {
    setIsExpanded(!isExpanded);
    setIsBlinking(true);
  };
  let classLabelName = "status_label";
  let classFooterName = "company-footer";
  let classCompanyName = "company";
  switch (status) {
    case "ACTIVE":
      classLabelName += " label_success";
      classFooterName += " info_success";
      break;
    case "UNDER DEVELOPMENT":
      classLabelName += " label_process";
      if (companyInfo === "NFT’S & Cloud Infra")
        classFooterName += " info_ideal";
      else classFooterName += " info_process";
      break;
    default:
      classLabelName += " label_ideal";
      classFooterName += " info_ideal";
  }
  switch (bordercolor) {
    case "bluegreen":
      classCompanyName += " bluegreen";
      break;
    case "greenblue":
      classCompanyName += " greenblue";
      break;
    default:
      classCompanyName += " blueorange";
  }
  return (
    <div
      className={classCompanyName + `${isExpanded ? " hidden" : ""} `}
      ref={companyRef}
      onClick={handleCompanyClick}
    >
      <div className="filter1" />
      <div className="filter2" />
      <div className={`modal_hide ${isExpanded ? "hidden" : ""}`}>
        <div className="modal_hide-header">
          <div className="category_label">
            <img src={categoryimageUrl} alt="qwe" />
            <p>{category}</p>
          </div>
          <div className={classLabelName}>
            <p>
              <ul>
                <li>{status}</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="flag_group">
          {flagsimageUrl.map((Url) => (
            <img src={Url} alt="qweqwe" />
          ))}
        </div>
        <div className={classFooterName}>{companyInfo}</div>
      </div>
      <div className={`company_logo ${isExpanded ? "hidden" : ""}`}>
        <img src={companyimageURL} alt="qweqwe" />
      </div>

      <div className={`modal_show ${isExpanded ? "hidden" : ""}`}>
        <div className="modal_show_body">{descriptionSentence}</div>
        <div className="modal_show_bottom">Visit Website ⇨</div>
      </div>
    </div>
  );
}

export default Company;
