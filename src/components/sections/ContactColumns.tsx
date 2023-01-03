import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";
import ContactColumnPart, {ContactColumnPartProps} from "../ContactColumnPart";

const ContactColumns = () => {
  const props: ContactColumnPartProps = {
    contacts: t("ContactColumns.contacts", { returnObjects: true }),
  };

  return <ContactColumnPart {...props}></ContactColumnPart>;
};

export default ContactColumns;
