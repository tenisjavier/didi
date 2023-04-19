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

const DiDiPrestamosDrvGrid = ({ images }: PrestamosGrid) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiPrestamosDrvGrid.title"),
    desc: t("DiDiPrestamosDrvGrid.desc"),
    bgColor: t("DiDiPrestamosDrvGrid.bgColor"),
    textColor: t("DiDiPrestamosDrvGrid.textColor"),
    columns: t("DiDiPrestamosDrvGrid.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-8";
    col.isImage = true;
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPrestamosDrvGrid;
