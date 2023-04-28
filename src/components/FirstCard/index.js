import React from "react";
import "./style.scss";

function Large({
  id,
  status,
  companyimageURL,
  flagsimageUrl,
  order,
  handleClick,
}) {
  let classLabelName = "status_label";
  switch (status) {
    case "ACTIVE":
      classLabelName += " label_success";
      break;
    case "UNDER DEVELOPMENT":
      classLabelName += " label_process";
      break;
    default:
      classLabelName += " label_ideal";
  }

  return (
    <div className={order + " card"} onClick={() => handleClick(id, order)}>
      <div className="filter1" />
      <div className="filter2" />
      <div className="card-header">
        <div className={classLabelName}>
          <p>
            <ul>
              <li>{status}</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="card-body">
        <div className="company_logo">
          <img src={companyimageURL} alt="qweqwe" />
        </div>
        <div className="flag_group">
          {flagsimageUrl.map((Url) => (
            <img src={Url} alt="qweqwe" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Large;
