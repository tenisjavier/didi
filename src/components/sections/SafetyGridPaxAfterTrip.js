import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const SafetyGridPaxAfterTrip = ({ images }) => {
  const props = {
    title: t("SafetyGridPaxAfterTrip.title"),
    bgColor: t("SafetyGridPaxAfterTrip.bgColor"),
    textColor: t("SafetyGridPaxAfterTrip.textColor"),
    columns: t("SafetyGridPaxAfterTrip.columns", { returnObjects: true }),
    width: "w-72",
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-4";
    col.isImage = true;
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridPaxAfterTrip;
