import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const SafetyGridWomanSteps = ({ images }) => {
  const props = {
    title: t("SafetyGridWomanSteps.title"),
    desc: t("SafetyGridWomanSteps.desc"),
    bgColor: t("SafetyGridWomanSteps.bgColor"),
    textColor: t("SafetyGridWomanSteps.textColor"),
    columns: t("SafetyGridWomanSteps.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index];
      col.image = image;
      col.imageStyle = "z-10 m-4";
      col.isImage = true;
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridWomanSteps;
