import React, { useState } from "react";
import "./style.scss";
import FirstCard from "../FirstCard";
function Mask_group() {
  const [rerender, setRerender] = useState(false);
  const [companies, setCompanies] = useState([
    {
      id: 1,
      status: "UNDER DEVELOPMENT",
      companyimageURL: "../image/nftraz-our-holding-companies-logo.png",
      flagsimageUrl: ["../image/world.png"],
      order: "order1",
      num: 1,
    },
    {
      id: 2,
      status: "ACTIVE",
      companyimageURL: "../image/nexconz-our-holding-companies-logo.png",
      flagsimageUrl: [
        "../image/united-states-of-america-m.png",
        "../image/india-icon-m.png",
        "../image/singapore-icon-m.png",
      ],
      order: "order2",
      num: 2,
    },
    {
      id: 3,
      status: "UNDER DEVELOPMENT",
      companyimageURL: "../image/nexub-our-holding-companies-logo.png",
      flagsimageUrl: [
        "../image/united-states-of-america-m.png",
        "../image/india-icon-m.png",
      ],
      order: "order3",
      num: 3,
    },
    {
      id: 4,
      status: "ACTIVE",
      companyimageURL: "../image/nexdemy-our-holding-companies-logo.png",
      flagsimageUrl: ["../image/india-icon-m.png"],
      order: "order4",
      num: 4,
    },
    {
      id: 5,
      status: "UNDER DEVELOPMENT",
      companyimageURL: "../image/gotradex-our-holding-companies-logo.png",
      flagsimageUrl: ["../image/world.png"],
      order: "order5",
      num: 5,
    },
  ]);

  const handleClick = (id, order) => {
    if (order === "order3") {
      for (let i = 0; i < 5; i++) {
        let num = companies[i].num - 1;
        num = num === 0 ? 5 : num;
        companies[i].order = "order" + num;
        companies[i].num = num;
      }
      setCompanies(companies);
      setRerender(!rerender);
      console.log("asd");
    }
    if (order === "order2") {
      for (let i = 0; i < 5; i++) {
        let num = companies[i].num + 1;
        num = num === 6 ? 1 : num;
        companies[i].order = "order" + num;
        companies[i].num = num;
      }
      setCompanies(companies);
      setRerender(!rerender);
    }
  };

  return (
    <div className={"maskgroup" + rerender}>
      {companies.map((company) => (
        <FirstCard
          id={company.id}
          status={company.status}
          companyimageURL={company.companyimageURL}
          flagsimageUrl={company.flagsimageUrl}
          order={company.order}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Mask_group;
