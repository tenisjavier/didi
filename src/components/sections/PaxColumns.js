import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const PaxColumns = () => {
  const { t } = useTranslation();
  const props = {
    bgColor: t("PaxColumns.bgColor"),
    columns: t("PaxColumns.columns", { returnObjects: true }),
  };
  props.columns[0].image = <FontAwesomeIcon icon={faUserShield} size="3x" />;

  props.columns[1].image = <FontAwesomeIcon icon={faDollarSign} size="3x" />;

  props.columns[2].image = <FontAwesomeIcon icon={faClock} size="3x" />;

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default PaxColumns;
