import React from "react";
import Company from "../../components/Company";
import Spline from "@splinetool/react-spline";
import "./style.scss";

function Companies() {
  const firstLevelCompanies = [
    {
      id: 1,
      categoryimageUrl: "../image/-company-holdings-consulting.png",
      category: "Consulting",
      status: "ACTIVE",
      bordercolor: "bluegreen",
      companyimageURL: "../image/nexconz-our-holding-companies-logo.png",
      flagsimageUrl: [
        "../image/united-states-of-america-m.png",
        "../image/india-icon-m.png",
        "../image/singapore-icon-m.png",
      ],
      companyInfo: "Technology & Consulting",
      descriptionSentence:
        "Transforming ordinary businesses into profitable tech brands with scalable digital solutions.",
    },
    {
      id: 2,
      categoryimageUrl: "../image/-company-holdings-saas.png",
      category: "SaaS",
      status: "UNDER DEVELOPMENT",
      bordercolor: "greenblue",
      companyimageURL: "../image/nexub-our-holding-companies-logo.png",
      flagsimageUrl: [
        "../image/united-states-of-america-m.png",
        "../image/india-icon-m.png",
      ],
      companyInfo: "Business OS",
      descriptionSentence:
        "Automate and manage your entire organization in one place with Nexub, the intuitive, all-in-one scalable SaaS platform.",
    },
    {
      id: 3,
      categoryimageUrl: "../image/-company-holdings-education.png",
      category: "Education",
      status: "ACTIVE",
      bordercolor: "bluegreen",
      companyimageURL: "../image/nexdemy-our-holding-companies-logo.png",
      flagsimageUrl: ["../image/india-icon-m.png"],
      companyInfo: "Training & Upskilling",
      descriptionSentence:
        "Nexdemy helps freshers effortlessly enter the world of IT with training and certification programs.",
    },
  ];
  const secondLevelCompanies = [
    {
      id: 4,
      categoryimageUrl: "../image/-company-holdings-decentralized.png",
      category: "Decentralisation",
      status: "UNDER DEVELOPMENT",
      bordercolor: "greenblue",
      companyimageURL: "../image/gotradex-our-holding-companies-logo.png",
      flagsimageUrl: ["../image/world.png"],
      companyInfo: "Decentralised Finance",
      descriptionSentence:
        "Trade crypto the smart way with GotradeX - the decentralized exchange with the lowest trading fees and hassle-free transactions.",
    },
    {
      id: 5,
      categoryimageUrl: "../image/-company-holdings-decentralized.png",
      category: "Decentralisation",
      status: "UNDER DEVELOPMENT",
      bordercolor: "greenblue",
      companyimageURL: "../image/nftraz-our-holding-companies-logo.png",
      flagsimageUrl: ["../image/world.png"],
      companyInfo: "NFT’S & Cloud Infra",
      descriptionSentence:
        "NFTraz empowers creators and collectors in the digital art world with robust infrastructure solutions for seamless tokenization and secure trading.",
    },
    {
      id: 6,
      categoryimageUrl: "../image/-company-holdings-multimedia-gaming.png",
      category: "Multimedia / Gaming",
      status: "ACTIVE",
      bordercolor: "bluegreen",
      companyimageURL: "../image/nextudioz-our-holding-companies-logo.png",
      flagsimageUrl: [
        "../image/united-states-of-america-m.png",
        "../image/india-icon-m.png",
      ],
      companyInfo: "3D, AR/VR & Game Studio",
      descriptionSentence:
        "Nexstudioz creates engaging gaming experiences and 3D assets, and brings them to life with compelling storytelling and cutting-edge technology.",
    },
  ];
  const thirdLevelCompanies = [
    {
      id: 7,
      categoryimageUrl: "../image/-company-holdings-deep-tech.png",
      category: "Deep Tech & ML",
      status: "Ideation",
      bordercolor: "blueorange",
      companyimageURL: "../image/datazso-our-holding-companies-logo.png",
      flagsimageUrl: [
        "../image/united-states-of-america-m.png",
        "../image/india-icon-m.png",
      ],
      companyInfo: "Data Analytics",
      descriptionSentence:
        "Datazso unlocks the potential of data through expert analytics, providing businesses with actionable insights to enhance decision-making and optimize performance.",
    },
    {
      id: 8,
      categoryimageUrl: "../image/-company-holdings-investment.png",
      category: "Investment",
      status: "UNDER DEVELOPMENT",
      bordercolor: "greenblue",
      companyimageURL: "../image/nexzio-capital-our-holding-companies-logo.png",
      flagsimageUrl: ["../image/united-states-of-america-m.png"],
      companyInfo: "Angle / Venture Capital",
      descriptionSentence:
        "Nexzio Capital invests in pioneering startups to drive innovation and transform industries for a better future.",
    },
  ];
  return (
    <div className="companies">
      <div className="companies_heading">Our Holding Companies</div>
      <div className="content">
        <div className="background">
          <Spline
            scene="https://prod.spline.design/8VdpopSxZOwM5iUv/scene.splinecode"
            style={{
              width: "89%",
              height: "500px",
              top: "300px",
              position: "absolute",
              cursor: "none",
            }}
          />
        </div>
        <div className="firstLevel">
          {firstLevelCompanies.map((company) => (
            <Company
              companyInfo={company.companyInfo}
              category={company.category}
              status={company.status}
              bordercolor={company.bordercolor}
              categoryimageUrl={company.categoryimageUrl}
              companyimageURL={company.companyimageURL}
              flagsimageUrl={company.flagsimageUrl}
              descriptionSentence={company.descriptionSentence}
            />
          ))}
        </div>
        <div className="secondLevel">
          {secondLevelCompanies.map((company) => (
            <Company
              companyInfo={company.companyInfo}
              category={company.category}
              status={company.status}
              bordercolor={company.bordercolor}
              categoryimageUrl={company.categoryimageUrl}
              companyimageURL={company.companyimageURL}
              flagsimageUrl={company.flagsimageUrl}
              descriptionSentence={company.descriptionSentence}
            />
          ))}
        </div>
        <div className="thirdLevel">
          {thirdLevelCompanies.map((company) => (
            <Company
              companyInfo={company.companyInfo}
              category={company.category}
              status={company.status}
              bordercolor={company.bordercolor}
              categoryimageUrl={company.categoryimageUrl}
              companyimageURL={company.companyimageURL}
              flagsimageUrl={company.flagsimageUrl}
              descriptionSentence={company.descriptionSentence}
            />
          ))}
          <div style={{ opacity: 0, width: "366px" }} />
        </div>
      </div>
    </div>
  );
}

export default Companies;
