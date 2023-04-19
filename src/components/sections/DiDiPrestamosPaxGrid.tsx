import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface PrestamosGrid {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiPrestamosPaxGrid = ({ images }: PrestamosGrid) => {
  const props: ColumnsSectionProps = {
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
