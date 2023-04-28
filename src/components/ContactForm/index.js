import React from "react";
import FloatingLabelInput from "./FloatingLabelInput";
import FlagCodeEdit from "./FlagCodeEdit";
import SeleteCountryControl from "./SeleteCountryControl";
import SelectInquiriesControl from "./SelectInquiriesControl";
//import PhoneNumberInput from "./PhoneNumberInput";
import "./style.scss";
function ContactForm() {
  const contact_items = [
    {
      id: 1,
      imageUrl: "../image/user-icon.png",
      label: "Full Name",
    },
    {
      id: 2,
      imageUrl: "../image/country-icon.png",
      name: ["India", "Iran", "Iraq", "Indonesia"],
      label: "Country",
    },
    {
      id: 3,
      imageUrl: "../image/country-icon.png",
    },
    {
      id: 4,
      imageUrl: "../image/mail-icon.png",
      label: "Email",
    },
    {
      id: 5,
      imageUrl: "../image/inquiry-icon.png",
      name: ["General", "Investment Opportunities"],
      label: "Inquiries Type",
    },
    {
      id: 6,
      imageUrl: "../image/message-icon.png",
      label: "Message",
    },
  ];
  return (
    <div className="contact-form">
      <div className="contact-form-blur1"></div>
      <div className="contact-form-blur2"></div>
      <div class="form-content">
        <form>
          <div className="form-control">
            {contact_items.map((contact_item) =>
              contact_item.id === 1 ||
              contact_item.id === 4 ||
              contact_item.id === 6 ? (
                <FloatingLabelInput
                  key={contact_item.id}
                  imageUrl={contact_item.imageUrl}
                  label={contact_item.label}
                />
              ) : contact_item.id === 2 ? (
                <SeleteCountryControl
                  key={contact_item.id}
                  name={contact_item.name}
                  imageUrl={contact_item.imageUrl}
                  label={contact_item.label}
                />
              ) : contact_item.id === 3 ? (
                <FlagCodeEdit />
              ) : // <PhoneNumberInput
              //   key={contact_item.id}
              //   imageUrl={contact_item.imageUrl}
              // />
              contact_item.id === 5 ? (
                <SelectInquiriesControl
                  key={contact_item.id}
                  name={contact_item.name}
                  imageUrl={contact_item.imageUrl}
                  label={contact_item.label}
                />
              ) : null
            )}
          </div>
          <div class="form-actions">
            <button class="submit_btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
