import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const SafetyGridBeforeTrip = ({ images }) => {
  const props = {
    title: t("SafetyGridBeforeTrip.title"),
    bgColor: t("SafetyGridBeforeTrip.bgColor"),
    textColor: t("SafetyGridBeforeTrip.textColor"),
    columns: t("SafetyGridBeforeTrip.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-4";
    col.isImage = true;
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridBeforeTrip;
