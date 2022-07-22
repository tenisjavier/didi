import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Contact, { ContactProps } from "../Contact";

const ContactInfo = () => {
  const { t } = useTranslation();
  const props: ContactProps = {
    contact: t("Contact.contactSections", { returnObjects: true }),
  };
  return <Contact {...props}></Contact>;
};

export default ContactInfo;