import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const SafetyGridAfterTrip = ({ images }) => {
  const props = {
    title: t("SafetyGridAfterTrip.title"),
    bgColor: t("SafetyGridAfterTrip.bgColor"),
    textColor: t("SafetyGridAfterTrip.textColor"),
    columns: t("SafetyGridAfterTrip.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-4";
    col.isImage = true;
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridAfterTrip;
