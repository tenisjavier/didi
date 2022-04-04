import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faExclamationCircle,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";

const HomeColumns = () => {
  const { t } = useTranslation();
  const props = {
    bgColor: t("HomeColumns.bgColor"),
    textColor: t("HomeColumns.textColor"),
    columns: t("HomeColumns.columns", { returnObjects: true }),
  };

  props.columns[0].image = <FontAwesomeIcon icon={faQuoteRight} size="3x" />;

  props.columns[1].image = (
    <FontAwesomeIcon icon={faExclamationCircle} size="3x" />
  );

  props.columns[2].image = <FontAwesomeIcon icon={faHeadphonesAlt} size="3x" />;

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default HomeColumns;
