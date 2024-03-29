import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faFile,
  faIdBadge,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

const FoodDeliveryStepsColumns = () => {
  const props: ColumnsSectionProps = {
    title: t("FoodDeliveryStepsColumns.title"),
    bgColor: t("FoodDeliveryStepsColumns.bgColor"),
    textColor: t("FoodDeliveryStepsColumns.textColor"),
    columns: t("FoodDeliveryStepsColumns.columns", { returnObjects: true }),
  };

  props.columns[0].image = (
    <FontAwesomeIcon icon={faMobileAlt} size="3x" className="w-12" />
  );

  props.columns[1].image = (
    <FontAwesomeIcon icon={faFile} size="3x" className="w-12" />
  );

  props.columns[2].image = (
    <FontAwesomeIcon icon={faIdBadge} size="3x" className="w-12" />
  );
  props.columns[3].image = (
    <FontAwesomeIcon icon={faDollarSign} size="3x" className="w-12" />
  );

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodDeliveryStepsColumns;
