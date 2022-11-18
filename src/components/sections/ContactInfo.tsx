import React from "react";
import { t } from "../../context/countryContext";
import Contact, { ContactProps } from "../Contact";

const ContactInfo = () => {
  const props: ContactProps = {
    contact: t("FoodContact.contactSections", { returnObjects: true }),
  };
  return <Contact {...props}></Contact>;
};

export default ContactInfo;
