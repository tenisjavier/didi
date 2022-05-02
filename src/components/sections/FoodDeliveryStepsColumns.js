import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faFile,
  faIdBadge,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const FoodDeliveryStepsColumns = () => {
  const { t } = useTranslation();
  const props = {
    title: t("FoodDeliveryStepsColumns.title"),
    bgColor: t("FoodDeliveryStepsColumns.bgColor"),
    columns: t("FoodDeliveryStepsColumns.columns", { returnObjects: true }),
  };

  props.columns[0].image = <FontAwesomeIcon icon={faMobileAlt} size="3x" />;

  props.columns[1].image = <FontAwesomeIcon icon={faFile} size="3x" />;

  props.columns[2].image = <FontAwesomeIcon icon={faIdBadge} size="3x" />;
  props.columns[3].image = <FontAwesomeIcon icon={faDollarSign} size="3x" />;

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodDeliveryStepsColumns;
