import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const SafetyGridDuringTrip = ({ images }) => {
  const props = {
    title: t("SafetyGridDuringTrip.title"),
    desc: t("SafetyGridDuringTrip.desc"),
    bgColor: t("SafetyGridDuringTrip.bgColor"),
    textColor: t("SafetyGridDuringTrip.textColor"),
    columns: t("SafetyGridDuringTrip.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-4";
    col.isImage = true;
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridDuringTrip;
