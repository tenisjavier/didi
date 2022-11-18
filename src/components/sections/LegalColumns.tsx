import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faNewspaper,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface LegalColumnsProps {
  title: string;
  columns: any[];
}

const LegalColumns = ({ title, columns }: LegalColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("LegalColumns.bgColor"),
    textColor: t("LegalColumns.textColor"),
    columns: columns || t("LegalColumns.columns", { returnObjects: true }),
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default LegalColumns;
