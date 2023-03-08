import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const DiDiPrestamosPaxGrid = ({ images }) => {
  const props = {
    title: t("DiDiPrestamosPaxGrid.title"),
    bgColor: t("DiDiPrestamosPaxGrid.bgColor"),
    textColor: t("DiDiPrestamosPaxGrid.textColor"),
    columns: t("DiDiPrestamosPaxGrid.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-4";
    col.isImage = true;
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPrestamosPaxGrid;
