import React from "react";
import { t } from "../../context/countryContext";
import ContactColumnPart, {ContactColumnPartProps} from "../ContactColumnPart";

const ContactColumns = () => {
  const props: ContactColumnPartProps = {
    contacts: t("ContactColumns.contacts", { returnObjects: true }),
  };

  return <ContactColumnPart {...props}></ContactColumnPart>;
};

export default ContactColumns;
