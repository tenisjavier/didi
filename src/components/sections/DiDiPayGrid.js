import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const DiDiPayGrid = ({ images }) => {
  const props = {
    title: t("DiDiPayGrid.title"),
    desc: t("DiDiPayGrid.desc"),
    bgColor: t("DiDiPayGrid.bgColor"),
    textColor: t("DiDiPayGrid.textColor"),
    columns: t("DiDiPayGrid.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-4";
    col.isImage = true;
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPayGrid;
