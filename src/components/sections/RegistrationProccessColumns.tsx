import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faExclamationCircle,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface RegistrationProccessColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const RegistrationProccessColumns = ({ images }: RegistrationProccessColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("RegistrationProccessColumns.title"),
    bgColor: t("RegistrationProccessColumns.bgColor"),
    textColor: t("RegistrationProccessColumns.textColor"),
    columns: t("RegistrationProccessColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default RegistrationProccessColumns;
