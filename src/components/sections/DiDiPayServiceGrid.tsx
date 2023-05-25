import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayServiceGrid {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiPayServiceGrid = ({ images }: DiDiPayServiceGrid) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiPayServiceGrid.title"),
    desc: t("DiDiPayServiceGrid.desc"),
    bgColor: t("DiDiPayServiceGrid.bgColor"),
    textColor: t("DiDiPayServiceGrid.textColor"),
    columns: t("DiDiPayServiceGrid.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-4";
    col.isImage = true;
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPayServiceGrid;
